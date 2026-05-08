// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-28',
  devtools: { enabled: false },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  image: {
    quality: 85,
    formats: ['webp'],
  },

  content: {
    documentDriven: false,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Laame Jewels — Handcrafted Gold & Diamond Jewellery',
      meta: [
        { name: 'description', content: 'Discover handcrafted gold, diamond & gemstone jewellery at Laame Jewels. Earrings, necklaces, rings, bangles & bridal sets — BIS Hallmarked, delivered to your door.' },
        { name: 'theme-color', content: '#FAF8F5' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      whatsappPhone: '919744421599',
    },
  },
})
