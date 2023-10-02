// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [100, 400, 700, 900],
      }
    }],
    'nuxt-icon',
  ],
})
