// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/esamanru.css',
    '~/assets/css/pretendard.css',
    '~/assets/css/rapo-icon-font-codes.css',
    '~/assets/css/rapo-icon-font.css',
    '~/assets/css/jalnan.css',
    '~/assets/sass/common.sass',
  ],
  app:{
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      title: 'RAPORAPO',
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
          content: '현실과 가상 속에서의 라포를 형성시킬 수 있는 서비스. 온/오프라인 연계 기반의 게이미피케이션 서비스와 콘텐츠를 제공합니다.'
        },
      ],
    }
  }
})
