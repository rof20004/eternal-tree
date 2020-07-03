export function setToken (state, token) {
  state.token = token
}

export function delToken (state) {
  state.token = null
}

export function setUser (state, user) {
  state.user = user
  window.localStorage.setItem('user', JSON.stringify(user))
}

export function delUser (state) {
  state.user = null
  window.localStorage.removeItem('user')
}
