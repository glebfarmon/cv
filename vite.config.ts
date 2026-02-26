import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {defineConfig} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		react({
			babel: {
				plugins: ['babel-plugin-react-compiler']
			}
		}),
		visualizer({
			open: false,
			gzipSize: true,
			brotliSize: true,
			filename: 'dist/stats.html'
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'framer-motion': ['framer-motion'],
					'react-vendor': ['react', 'react-dom'],
					'icons': ['react-icons']
				}
			}
		}
	}
})
