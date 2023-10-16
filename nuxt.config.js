import { $content } from '@nuxt/content'
import i18n from './locales/i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  image: {
    // Options
  },
  server: {     
    port: 3000, // default: 3000     
    host: '0' // default: localhost   
  },   // other configs 

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: 'Chloé Heinis - DA freelance',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        { charset: 'UTF-8'},
        {
          hid: 'description',
          name: 'description',
          content: 'Portfolio Chloé Heinis'
        },
        { name:'msapplication-TileColor', content:'#ffffff' }, 
        { name:'msapplication-TileImage', content:'/ms-icon-144x144.png' }, 
        { name:'theme-color', content:'#ffffff' },
        { hid: 'ogtitle', property:'og:title', content:'Chloé Heinis - DA' },
        { property:'og:url', content:'http://chloeheinis.fr' },
        { hid: 'ogimage', property:'og:image', content:'https://chloeheinis.fr/opengraph.png' },
        { hid: 'ogdescription', property:'og:description', content:'Description de la page' },
        { property:'og:site_name', content:'Nom du site' },
        { property:'og:type', content:'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel:'apple-touch-icon', sizes:'57x57', href:'/apple-icon-57x57.png' },
        { rel:'apple-touch-icon', sizes:'60x60', href:'/apple-icon-60x60.png' },
        { rel:'apple-touch-icon', sizes:'72x72', href:'/apple-icon-72x72.png' },
        { rel:'apple-touch-icon', sizes:'76x76', href:'/apple-icon-76x76.png' },
        { rel:'apple-touch-icon', sizes:'114x114', href:'/apple-icon-114x114.png' },
        { rel:'apple-touch-icon', sizes:'120x120', href:'/apple-icon-120x120.png' },
        { rel:'apple-touch-icon', sizes:'144x144', href:'/apple-icon-144x144.png' },
        { rel:'apple-touch-icon', sizes:'152x152', href:'/apple-icon-152x152.png' },
        { rel:'apple-touch-icon', sizes:'180x180', href:'/apple-icon-180x180.png' },
        { rel:'icon', type:'image/png', sizes:'192x192',  href:'/android-icon-192x192.png' },
        { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
        { rel:'icon', type:'image/png', sizes:'96x96', href:'/favicon-96x96.png' },
        { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
        { rel:'manifest', href:'/manifest.json' }
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content'
  ],
  i18n: {
    vueI18nLoader: true,
    defaultLocale: 'fr',
    silentFallbackWarn: true,
    baseUrl: 'https://chloeheinis.fr',
    locales: [
      {
         code: 'en',
         name: 'English',
         iso: 'en-US'
      },
      {
         code: 'fr',
         name: 'Français',
         iso: 'fr-FR'
      }
    ],
    vueI18n: i18n
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
