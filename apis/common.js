import { urls, jpurls, get, post, fpost } from './http.js'

const BASE_PATH = ''

// download-file
export const DOWNLOAD_FILE = params => get(`${BASE_PATH}`, params)

// upload-file
export const UPLOAD_FILE = params => get(`${BASE_PATH}`, params)

// delete-file
export const DELETE_FILE = params => get(`${BASE_PATH}`, params)