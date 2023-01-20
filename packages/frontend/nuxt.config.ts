// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  imports: {
    dirs: ["stores"],
  },
  typescript: {
    shim: false,
    strict: true,
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "acceptHMRUpdate",
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
});
