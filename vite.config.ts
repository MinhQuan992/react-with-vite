import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode, ssrBuild}) => {
  console.log(command, mode, ssrBuild);

  const env = loadEnv(mode, process.cwd(), "VITE")
  console.log(env);

  return {
    plugins: [react()],
    clearScreen: false,
    server: {
      port: 3000
    },
    preview: {
      port: 8080
    }
  }
})
