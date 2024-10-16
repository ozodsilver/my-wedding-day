// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head : {
      title : 'Ozodxon & Fazoda',
      meta: [
        { name: 'description', content: 'Bu bizning hayotimizdagi eng muhim kunlardan biri!' },
        { property: 'og:title', content: 'Hurmatli mehmon' },
        { property: 'og:description', content: 'Bizning hayotimizning unutilmas kunida - siz ham biz bilan birga bo‘ling!' },
        { property: 'og:image', content: 'https://myweddingday.vercel.app/metaImage.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1600' },
        { property: 'og:image:height', content: '780' },
        { property: 'og:url', content: 'https://myweddingday.vercel.app/' },
        { name: 'author', content: 'Ozodxon va Fazoda' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:locale', content: 'uz_UZ' },
        { property: 'og:site_name', content: 'Taklifnoma' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/public/favicon.ico' },
      ]
    }
  },
  css: [
    '~/assets/styles/main.scss',
  ],
})
