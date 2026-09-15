import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://marcelofloresfuentealba-cpu.github.io/Hito-2-Pizzeria-Mamma-Mia/',
})
