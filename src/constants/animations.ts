import type { Transition, Variants } from 'framer-motion'

// Animation durations
export const ANIMATION_DURATION = {
	fast: 0.3,
	normal: 0.5,
	slow: 0.8,
	verySlow: 1.2
} as const

// Animation delays
export const ANIMATION_DELAY = {
	none: 0,
	short: 0.1,
	medium: 0.2,
	long: 0.3
} as const

// Common transitions
export const TRANSITIONS = {
	spring: {
		type: 'spring',
		stiffness: 100,
		damping: 15
	} as Transition,
	easeOut: {
		duration: ANIMATION_DURATION.normal,
		ease: 'easeOut'
	} as Transition,
	easeInOut: {
		duration: ANIMATION_DURATION.normal,
		ease: 'easeInOut'
	} as Transition
} as const

// Common animation variants
export const FADE_IN_UP: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
}

export const FADE_IN_DOWN: Variants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0 }
}

export const FADE_IN: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
}

export const SCALE_IN: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 }
}

export const SLIDE_IN_LEFT: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0 }
}

export const SLIDE_IN_RIGHT: Variants = {
	hidden: { opacity: 0, x: 50 },
	visible: { opacity: 1, x: 0 }
}

// Viewport settings for scroll animations
export const VIEWPORT_ONCE = {
	once: true,
	amount: 0.3
} as const

export const VIEWPORT_ONCE_SMALL = {
	once: true,
	amount: 0.2
} as const
