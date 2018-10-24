import { request } from './utils'

const CURRENT_USER = '/users/current'
const LOGIN_URL = '/api-token-auth'
const SEND_MAIL = '/custom/send_mail'
const REFRESH_TOKEN_URL = '/api-token-refresh'
const RESET_PASS_URL = '/password_reset'
const DIRECCIONES_URL = '/direcciones'
const PROB_PPALES = '/problematicasprincipales'

export const getCurrentUser = () => request('get', CURRENT_USER)
export const login = (data) => request('post', LOGIN_URL, data)
export const listModel = (url, filter) => request('get', url, filter)
export const getInstance = (url) => request('get', url)
export const updateInstance = (url, data) => request('patch', url, data)
export const sendMail = (urlSufix) => request('get', SEND_MAIL + urlSufix)
export const refreshToken = (token) => request('post', REFRESH_TOKEN_URL, token)
export const postModel = (url, data) => request('post', url, data)
export const resetPassword = process.env.API_BASE + RESET_PASS_URL
export const getProvincias = () => request('options', DIRECCIONES_URL)
export const getProbsPpales = () => request('options', PROB_PPALES)
