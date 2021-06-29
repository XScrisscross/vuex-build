export default {
  // utils是否挂载Window
  utilsMountWindow: false,
  // utils是否挂载Vue
  utilsMountVue: true,
  // api是否挂载Window
  apiMountWindow: true,
  // api是否挂载Vue
  apiMountVue: false,
  // baseURL测试生产地址
  baseURL: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1' : '/api',
}
