import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      // styleId: process.env.npm_package_name,
    }),
  ],
  preview:{
    port: 53173,
  },
  build:{
    target: "es2020",
		lib:{
			entry: "src/main.jsx",
			formats: ['es'],
      name: "admins",
			fileName: "admins", 
		}
	},
  define: {
    "process.env.NODE_ENV": "'production'",
  },
})
