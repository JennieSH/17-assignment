import path from "path";
import { defineNuxtConfig } from "nuxt3";
import viteSvgIcons from "vite-plugin-svg-icons";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources"
  ],
  alias: { "@": __dirname },
  css: ["normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // eslint-disable-next-line prettier/prettier
          additionalData: "@import \"@/assets/style/index.scss\";"
        }
      }
    },
    plugins: [
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), "assets/icons")],
        symbolId: "[name]"
      })
    ]
  }
});
