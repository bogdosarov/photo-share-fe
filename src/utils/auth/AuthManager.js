import { get } from 'lodash'
import PubSub from 'pubsub-js'

import { API } from 'utils/api/api'
import { TOKEN_KEY } from 'utils/constants/auth'
import { decodeToken, isTokenExpired } from 'utils/helpers/auth'
import { LocalStorageManager } from 'utils/auth/LocalStorageManger'

export const AUTH_EVENTS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

class AuthManager {
  _token = null
  _tokenParsed = null
  authenticated = false

  constructor() {
    this.storage = new LocalStorageManager()
  }

  _loadTokenFromStorage() {
    return new Promise((resolve, reject) => {
      const token = this.storage.getFieldFromStorage(TOKEN_KEY)

      if (token) {
        const tokenParsed = decodeToken(token)

        if (!isTokenExpired(get(tokenParsed, 'exp'))) {
          resolve({ token, tokenParsed })
        } else {
          this.storage.removeFieldFromStorage(TOKEN_KEY)
          reject('Token is expired.')
        }
      } else {
        reject('Cannot load token from storage.')
      }
    })
  }

  init() {
    return new Promise((resolve, reject) => {
      this._loadTokenFromStorage()
        .then(({ token, tokenParsed }) => {
          this._token = token
          this._tokenParsed = tokenParsed
          this.authenticated = true

          PubSub.publish(AUTH_EVENTS.LOGIN)
          resolve(this.authenticated)
        })
        .catch(() => reject(this.authenticated))
    })
  }

  login({ email, password }) {
    return new Promise((resolve, reject) => {
      API.request({
        url: '/login',
        method: 'post',
        withCredentials: true,
        data: JSON.stringify({
          email,
          password,
        }),
      })
        .then(({ data: { token } }) => {
          this._token = token
          this.storage.setFieldInStorage({ name: TOKEN_KEY, value: token })
          this.authenticated = true

          PubSub.publish(AUTH_EVENTS.LOGIN)
          resolve(this.authenticated)
        })
        .catch(err => reject(err))
    })
  }

  logout() {
    this.storage.removeFieldFromStorage(TOKEN_KEY)
    this.authenticated = false
    PubSub.publish(AUTH_EVENTS.LOGOUT)
  }

  getToken() {
    return this._token
  }

  on(eventType, listener) {
    const subscriber = PubSub.subscribe(eventType, listener)

    return () => PubSub.unsubscribe(subscriber)
  }
}

export const AuthManagerInstance = new AuthManager()
