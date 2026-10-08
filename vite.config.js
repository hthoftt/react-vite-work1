import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // 部署到 GitHub Pages 時,網址在 /react-vite-work1/ 底下
  base: command === "build" ? "/react-vite-work1/" : "/",
  plugins: [react()],
}))
