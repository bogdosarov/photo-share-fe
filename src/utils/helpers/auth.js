import { TOKEN_MIN_VALID_TIME } from 'utils/constants/auth'

export const isTokenExpired = exp => {
  let expiresIn = exp - Math.ceil(new Date().getTime() / 1000)

  expiresIn -= TOKEN_MIN_VALID_TIME

  return expiresIn < 0
}

export const decodeToken = str => {
  str = str.split('.')[1]

  str = str.replace('/-/g', '+')
  str = str.replace('/_/g', '/')
  switch (str.length % 4) {
    case 0:
      break
    case 2:
      str += '=='
      break
    case 3:
      str += '='
      break
    default:
      // eslint-disable-next-line
      throw 'Invalid token'
  }

  str = (str + '===').slice(0, str.length + (str.length % 4))
  str = str.replace(/-/g, '+').replace(/_/g, '/')

  str = decodeURIComponent(escape(window.atob(str)))

  str = JSON.parse(str)

  return str
}
