/* global process */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import adminPlugin from './admin-plugin.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Loads ADMIN_PASSWORD from .env.local (no VITE_ prefix, so it never reaches the browser bundle)
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), adminPlugin({ password: env.ADMIN_PASSWORD })],
  }
})
