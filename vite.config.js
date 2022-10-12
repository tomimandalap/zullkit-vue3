import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

// export default ({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '')
//   return defineConfig({
//     plugins: [vue()],
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url)),
//       },
//     },
//     server: {
//       proxy: {
//         // '/api-web': `${env.VITE_API_ENDPOINT}`,
//         // '/api-web/': {
//         //   target: env.VITE_API_ENDPOINT,
//         //   changeOrigin: true,
//         //   rewrite: (path) => path.replace(/^\/api-web/, ''),
//         // },
//         // '/socket.io': {
//         //   target: 'ws://localhost:3000',
//         //   ws: true,
//         // },
//       },
//     },
//   })
// }
