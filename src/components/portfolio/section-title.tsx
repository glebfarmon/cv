import {motion} from 'framer-motion'
import {useReducedMotion} from '@/hooks'

interface SectionTitleProps {
	children: React.ReactNode
	id?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({children, id}) => {
	const prefersReducedMotion = useReducedMotion()

	return (
		<motion.h2
			id={id}
			className='text-primary relative mb-12 py-4 text-center font-mono text-3xl font-bold sm:mb-16 sm:text-4xl'
			initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
			whileInView={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 1, y: 0}}
			viewport={{once: true, amount: 0.5}}
			transition={{duration: 0.5, ease: 'easeOut'}}>
			<span className='relative z-10'>{children}</span>
			<span className='text-card absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-5xl font-bold opacity-30 sm:text-7xl'>
				{children}
			</span>
		</motion.h2>
	)
}

export default SectionTitle
