import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources"
  ],
  alias: { "@": __dirname },
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/style/init.scss";',
            },
        },
    },
  }
});
