import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-router-tutorial",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000
  }
})
