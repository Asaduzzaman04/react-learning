import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  //backup-port
  //server: {
  //  port: 3000 // optional, defaults to 3000 port (I can customize it if I want ex=> localhost:3000)
  //},
  plugins: [react()],
})
