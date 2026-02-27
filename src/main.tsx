import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Lazy load fonts after initial render to prevent blocking
// iOS Safari will use system fonts immediately, then swap when ready
if (typeof window !== 'undefined') {
	// Load fonts asynchronously after initial paint
	requestIdleCallback(() => {
		import('@fontsource/jetbrains-mono/400.css')
		import('@fontsource/jetbrains-mono/700.css')
		import('@fontsource/poppins/400.css')
		import('@fontsource/poppins/600.css')
		import('@fontsource/poppins/700.css')
	}, { timeout: 2000 })
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
