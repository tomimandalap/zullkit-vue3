import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const env = await loadEnv(mode, process.cwd(), 'VITE_API_ENDPOINT')
  if (['serve', 'build'].includes(command)) {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      server: {
        proxy: {
          '/api-web': {
            target: env.VITE_API_ENDPOINT,
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api-web/, ''),
          },
        },
      },
    }
  }
})
