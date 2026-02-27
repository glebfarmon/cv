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
				manualChunks: (id) => {
					// Separate vendor chunks for better caching
					if (id.includes('node_modules')) {
						if (id.includes('framer-motion')) {
							return 'framer-motion'
						}
						if (id.includes('react') || id.includes('react-dom')) {
							return 'react-vendor'
						}
						if (id.includes('react-icons')) {
							return 'icons'
						}
						if (id.includes('@fontsource')) {
							return 'fonts'
						}
						// Other vendor code
						return 'vendor'
					}
				}
			}
		},
		// Optimize chunk size for mobile
		chunkSizeWarningLimit: 500,
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Use esbuild for faster minification (default)
		minify: 'esbuild'
	}
})
