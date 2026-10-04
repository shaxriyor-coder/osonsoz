import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Statik sayt: backend yo'q, Vercel standart sozlamalar bilan ishlaydi.
export default defineConfig({
  plugins: [react()],
})
