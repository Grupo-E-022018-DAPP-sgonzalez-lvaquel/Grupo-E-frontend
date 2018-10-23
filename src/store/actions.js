import * as api from '@/api'

export const getCurrentUser = ({ commit }, user) => {
  api.getCurrentUser().then(result => {
    user.name = result.data.username
    user.rol = result.data.rol
    user.apuestas = result.data.apuestas
    commit('UPDATE_USER', user)
  }, (err) => {
    console.log(err)
  })
}
