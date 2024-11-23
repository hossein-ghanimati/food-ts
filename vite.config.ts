import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  base: "./",
  server: {
    port: 3000
  }
})
