import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path";
import Icons from 'unplugin-icons/vite'
import mkcert from'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons(), mkcert()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "VtVueUi",
      fileName: "vt-vue-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
