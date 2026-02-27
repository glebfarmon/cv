import { useEffect, useState } from 'react'

interface ScrollPosition {
	x: number
	y: number
}

/**
 * Hook to track scroll position
 * @param threshold - Optional threshold to trigger state change
 */
export const useScrollPosition = (threshold = 0): ScrollPosition & { scrolled: boolean } => {
	const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 })
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const x = window.scrollX
			const y = window.scrollY
			setScrollPosition({ x, y })
			setScrolled(y > threshold)
		}

		handleScroll() // Initial call
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [threshold])

	return { ...scrollPosition, scrolled }
}
