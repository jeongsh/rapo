// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  ssr: false,

  // nitro: {
  //   output: {
  //     dir: '/raporapo/',
  //     serverDir: '/raporapo/',
  //     publicDir: '/raporapo/'
  //   }
  // },
  css: [
    '~/assets/css/esamanru.css',
    '~/assets/css/pretendard.css',
    '~/assets/css/rapo-icon-font-codes.css',
    '~/assets/css/rapo-icon-font.css',
    '~/assets/css/jalnan.css',
    '~/assets/sass/common.sass',
  ],
  app:{
    baseURL: '/rapo/',
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      title: '뽑아주십쇼!',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        {
          name: 'description',
          content: '안녕하세요 정상훈입니다... 제발 뽑아주세요...'
        },
      ],
    }
  }
})
