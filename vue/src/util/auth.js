export function getToken () {
  return localStorage.getItem('access-token')
}

export function setToken (aToken) {
  return localStorage.setItem('access-token', aToken)
}

export function isAuthenticated () {
  if (this.getToken()) {
    return true
  }
  return false
}

export function clear () {
  return localStorage.removeItem('access-token')
}
