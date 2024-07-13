import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import viteCompression from 'vite-plugin-compression'; // Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteCompression({ // Use the plugin here
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      verbose: true,
      deleteOriginFile: false,
    }),
  ],
  optimizeDeps: {
    force: true,
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },
});
