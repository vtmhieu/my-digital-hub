import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    // Base path - use "/" for root deployment (S3/CloudFront)
    base: "/",
    
    server: {
      host: "::",
      port: 8080,
    },
    
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    
    build: {
      // Output directory
      outDir: "dist",
      
      // Generate source maps for production debugging (optional)
      sourcemap: false,
      
      // Minification
      minify: isProduction ? "esbuild" : false,
      
      // Chunk size warning limit (500kb)
      chunkSizeWarningLimit: 500,
      
      // Rollup options for better code splitting
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // Vendor chunks
            "react-vendor": ["react", "react-dom", "react-router-dom"],
            "ui-vendor": [
              "@radix-ui/react-accordion",
              "@radix-ui/react-dialog",
              "@radix-ui/react-dropdown-menu",
              "@radix-ui/react-tooltip",
            ],
          },
          
          // Asset file naming with hash for cache busting
          // All assets go to assets/ folder (standard Vite structure)
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]",
        },
      },
      
      // Build optimizations
      cssCodeSplit: true,
      reportCompressedSize: true,
      emptyOutDir: true,
      
      // Target modern browsers for smaller bundle size
      target: ["es2015", "edge88", "firefox78", "chrome87", "safari14"],
    },
    
    // Preview server for testing production build locally
    preview: {
      port: 4173,
      host: "::",
    },
  };
});
