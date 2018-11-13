import { request } from './utils'

const CURRENT_USER = '/users/current'
const LOGIN_URL = '/api-token-auth'
const REFRESH_TOKEN_URL = '/api-token-refresh'
const AUCTIONS = '/auctions'

export const getCurrentUser = () => request('get', CURRENT_USER)
export const login = (data) => request('post', LOGIN_URL, data)
export const listModel = (url, filter) => request('get', url, filter)
export const getInstance = (url) => request('get', url)
export const updateInstance = (url, data) => request('patch', url, data)
export const refreshToken = (token) => request('post', REFRESH_TOKEN_URL, token)
export const postModel = (url, data) => request('post', url, data)
export const getAuctions = () => request('get', AUCTIONS)
