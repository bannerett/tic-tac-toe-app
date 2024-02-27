import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifest: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable_icon.png'],
  manifest: {
    name: 'Tic-Tac-Toe',
    short_name: 'Tic-Tac-Toe',
    description: 'Tic-Tac-Toe game',
    display: 'fullscreen',
    theme_color: '#000000',
    background_color: '#ffffff',
    icons: [
      { src: '/favicon.ico', sizes: '192x192', type: 'image/png', purpose: 'favicon' },
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'favicon' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'favicon' },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable icon',
      },
    ],
    scope: '/',
    lang: 'en',
    start_url: '/',
    orientation: 'portrait',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
  resolve: { alias: [{ find: '~', replacement: resolve(__dirname, 'src') }] },
  server: { port: 3000 },
});
