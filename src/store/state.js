export const STORAGE_KEY = 'subastify'

let initialState = {}

// Local storage sync initialState
if (localStorage.getItem(STORAGE_KEY)) {
  initialState = JSON.parse(localStorage.getItem(STORAGE_KEY))
} else {
  initialState = {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,
      loginError: false
    },
    user: {
      name: '',
      subastas: [],
      notifications: []
    }
  }
}

// Other state (not synced in local storage)
initialState.app = {
  callingAPI: false,
  searching: '',
  vm: null,
  showAlert: false,
  dataAlert: {
    title: '',
    msg: '',
    type: ''
  },
  redirectPath: ''
}

export const state = initialState
