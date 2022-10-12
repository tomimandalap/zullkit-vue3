import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let data = {}
  const env = loadEnv(mode, process.cwd())
  if (['serve'].includes(command)) {
    data = {
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
            rewrite: (path) => path.replace(/^\/api-web/, ''),
          },
        },
      },
    }
  }
  return data
})
