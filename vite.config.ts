import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#': fileURLToPath(new URL('./types', import.meta.url)),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        // drop_console: false,
        // pure_funcs: ['console.log'],
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
  },
})
