import { decodeToken, isTokenExpired } from 'utils/helpers/auth'

describe('decodeToken()', () => {
  describe('when valid token are provided', () => {
    test('Should return a decoded token in JSON format', () => {
      const mockToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      const expectedResult = { iat: 1516239022, name: 'John Doe', sub: '1234567890' }

      expect(decodeToken(mockToken)).toEqual(expectedResult)
    })
  })

  describe('when invalid token are provided', () => {
    test('Should return an error', () => {
      const mockToken =
        'eyJhbGciOiJIsdfUzI1NiIsInR5sdfsdfcCI6IkpXVCsdJ9.eyJzdWIiOiIxMsdfjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

      expect(() => decodeToken(mockToken)).toThrowError('Invalid token')
    })
  })
})

describe('isTokenExpired()', () => {
  describe('is expiration time is valid', () => {
    test('should return false', () => {
      const mockExpTime = 1735689600 // 2025 year

      expect(isTokenExpired(mockExpTime)).toBe(false)
    })
  })

  describe('is expiration time is not valid', () => {
    test('should return false', () => {
      const mockExpTime = 915148800 // 1999 year

      expect(isTokenExpired(mockExpTime)).toBe(true)
    })
  })
})
