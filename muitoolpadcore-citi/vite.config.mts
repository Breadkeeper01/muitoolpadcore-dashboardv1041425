import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Binds Vite to all network interfaces
    port: 5173,       // Vite dev server port
    cors: {
        origin: '*'   // Allows cross-origin requests from any origin
    },
    hmr: {
        host: '172.20.50.177', // Your LAN IP, so HMR uses your network address
        port: 5173,          // Must match Vite's port
    },
},
});