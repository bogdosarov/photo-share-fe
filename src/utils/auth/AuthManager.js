import axios from 'axios'
import { get } from 'lodash'

import { authUrl } from 'config/auth.config'
import { TOKEN_KEY } from 'utils/constants/auth'
import { decodeToken, isTokenExpired } from 'utils/helpers/auth'
import { LocalStorageManager } from 'utils/auth/LocalStorageManger'

const tokenClient = axios.create({
  baseURL: authUrl,
  responseType: 'json',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  },
})

class AuthManager {
  _token = null
  _tokenParsed = null
  authenticated = false

  constructor() {
    this.storage = new LocalStorageManager()
  }

  _loadTokenFromStorrage() {
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
      }
    })
  }

  init() {
    return new Promise((resolve, reject) => {
      this._loadTokenFromStorrage()
        .then(({ token, tokenParsed }) => {
          this._token = token
          this._tokenParsed = tokenParsed
          this.authenticated = true

          resolve(this.authenticated)
        })
        .catch(() => reject(this.authenticated))
    })
  }

  login({ email, password }) {
    return new Promise((resolve, reject) => {
      tokenClient
        .request({
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

          resolve(this.authenticated)
        })
        .catch(err => reject(err))
    })
  }

  logout() {
    this.storage.removeFieldFromStorage(TOKEN_KEY)
    this.authenticated = false
  }

  getToken() {
    return this._token
  }
}

export const AuthManagerInstance = new AuthManager()
