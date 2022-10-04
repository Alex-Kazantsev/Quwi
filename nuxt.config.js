import auth from './config/auth'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Quwi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Quwi_logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/_normalize.scss',
    '@/assets/styles/common.scss',
    '@/assets/styles/global.scss',
    '@/assets/styles/placeholders/avatar-placeholder.scss',
    '@/assets/styles/layout.scss',
    '@/assets/styles/transitions.scss',
    '@/assets/styles/forms/buttons.scss',
    '@/assets/styles/forms/links.scss',
    '@/assets/styles/modal.scss',
    '@/assets/styles/project.scss',
    '@/assets/styles/login.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/services.js',
    '~/plugins/utils'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000'
  },

  // Nuxt-Auth
  auth: auth,
  router: {
    middleware: ['auth', 'user-navigation-guard'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
