import {useEffect, useRef, useState} from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
	freezeOnceVisible?: boolean
}

/**
 * Hook to observe element intersection with viewport
 * Useful for triggering animations when elements come into view
 */
export const useIntersectionObserver = (
	options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
	const {threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = false} = options

	const elementRef = useRef<HTMLDivElement>(null)
	const [isIntersecting, setIsIntersecting] = useState(false)

	useEffect(() => {
		const element = elementRef.current
		if (!element) return

		// If already visible and frozen, don't observe
		if (freezeOnceVisible && isIntersecting) return

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting)
			},
			{threshold, root, rootMargin}
		)

		observer.observe(element)

		return () => {
			observer.disconnect()
		}
	}, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting])

	return [elementRef as React.RefObject<HTMLDivElement>, isIntersecting]
}
