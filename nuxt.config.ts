// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head : {
      title : 'Nikoh Ozodxon va Fazoda',
      meta: [
        { name: 'description', content: 'Bu bizning hayotimizdagi eng muhim kunlardan biri!' },

        // Open Graph Meta Tags for Social Sharing (Telegram, Facebook, etc.)
        { property: 'og:title', content: "Hurmatli mehmon" },
        { property: 'og:description', content: 'Bizning hayotimizning unutilmas kunida - siz ham biz bilan birga bo‘ling!' },
        { property: 'og:image', content: '/assets/images/metaImage.webp' },  // Rasmingiz joylashuvi
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://myweddingday.vercel.app/' },

        // Additional meta tags for better SEO
        { name: 'author', content: 'Ozodxon va Fazoda' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:locale', content: 'uz_UZ' }, // O'zbek tili uchun
        { property: 'og:site_name', content: 'Ozodxon va Fazoda nikoh to"y' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/' }, // Favicon uchun rasm
      ]
    }
  },
  css: [
    '~/assets/styles/main.scss',
  ],
})
