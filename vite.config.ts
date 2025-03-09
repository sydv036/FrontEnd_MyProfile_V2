import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // configuation shared file __variables.scss in folder styles
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/utils/_variables.scss" as *;
        @use "@/styles/utils/_mixins.scss" as *;
        `,
      },
    },
  },
});
