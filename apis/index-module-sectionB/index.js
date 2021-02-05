import { urls, jpurls, get, post, fpost } from '../http.js'

// search
export const FETCH_SEARCH_DATA = params => get(``, params)

// list_R_A
export const FETCH_LISTRA_DATA = params => get(``, params)

// list_R_B 
export const FETCH_LISTRB_DATA = params => get(``, params)

// list_R_C
export const FETCH_LISTRC_DATA = params => get(``, params)

// list_R_D
export const FETCH_LISTRD_DATA = params => get(``, params)

// list_KA_kq 
export const FETCH_KQ_LISTKA_DATA = params => get(``, params)

// list_KB_kq 
export const FETCH_KQ_LISTKB_DATA = params => get(``, params)

// list_KC_kq 
export const FETCH_KQ_LISTKC_DATA = params => get(``, params)

// list_KC_kq 
export const FETCH_KQ_LISTKD_DATA = params => get(``, params)

// list_KA_cq
export const FETCH_CQ_LISTKA_DATA = params => get(``, params)

// list_KB_cq
export const FETCH_CQ_LISTKB_DATA = params => get(``, params)

// list_JA
export const FETCH_LISTJA_DATA = params => get(``, params)

// list_JB
export const FETCH_LISTJB_DATA = params => get(``, params)
