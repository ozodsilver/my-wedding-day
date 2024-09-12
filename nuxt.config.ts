// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head : {
      title : 'my wedding day',
      meta: [
        { name: 'description', content: 'Saytingizning tavsifi' },
        { name: 'keywords', content: 'kalit so\'zlar, bo\'lishi, kerak' },
        { property: 'og:title', content: 'Sizning Saytingizning Nomini Kiriting' },
        { property: 'og:description', content: 'Saytingizning tavsifi' },
        { property: 'og:image', content: '~/assets/images/pigeon.png' },
        { property: 'og:url', content: 'https://www.sizning-saytingiz.com' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'Sizning Saytingizning Nomini Kiriting' },
        { property: 'twitter:description', content: 'Saytingizning tavsifi' },
        { property: 'twitter:image', content: '/path/to/image.jpg' },
      ],
    }
  }
})