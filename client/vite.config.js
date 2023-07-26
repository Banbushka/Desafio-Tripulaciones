import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: 
      {"/login": process.env.URL_SERVER,
       "/signup": process.env.URL_SERVER,
       "/logout": process.env.URL_SERVER,
       "/quiz": process.env.URL_SERVER
      }
  },
})
