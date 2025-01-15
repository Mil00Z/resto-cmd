import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  alias : {
    '@root' : '/src',
    '@common' : '/src/common',
    '@components' : '/src/components',
    '@app' : '/src/app',
    '@store' : '/src/app/store',
    '@selector' : '/src/app/selector',
  }
})
