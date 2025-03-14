import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    NodeGlobalsPolyfillPlugin({
        process: true,
        buffer: true,
    }),react()],
    optimizeDeps: {
      esbuildOptions: {
          define: {
              global: 'globalThis',
          },
          plugins: [
              NodeGlobalsPolyfillPlugin({
                  buffer: true,
              }),
          ],
      },
  },
})