import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: 
      {"/login": "https://mi-servicio-server-u4ktx3b6jq-ew.a.run.app",
       "/signup": "https://mi-servicio-server-u4ktx3b6jq-ew.a.run.app",
       "/logout": "https://mi-servicio-server-u4ktx3b6jq-ew.a.run.app",
       "/quiz": "https://mi-servicio-server-u4ktx3b6jq-ew.a.run.app"
      }
  },
})
