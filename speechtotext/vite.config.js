import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import runtime from "@babel/plugin-transform-runtime";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  optimizeDeps: {
    include: ["regenerator-runtime/runtime"],
  },
  babel: {
    plugins: [runtime],
  },
});
