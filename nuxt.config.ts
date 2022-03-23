import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    ssr: false
  },
  //ssr: false,
  buildModules: ['@pinia/nuxt'],
  typescript: {
    strict: true
  }
});
