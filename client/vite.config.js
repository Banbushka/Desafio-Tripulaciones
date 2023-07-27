import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: 
      {"/login": process.env.URL_UWE,
       "/signup": process.env.URL_UWE,
       "/logout": process.env.URL_UWE,
       "/quiz": process.env.URL_UWE
      }
  },
  define: {
    'process.env': process.env
  }
})
