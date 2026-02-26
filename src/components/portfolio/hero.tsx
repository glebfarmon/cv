import {motion} from 'framer-motion'
import {FaChevronDown, FaGithub, FaLinkedin} from 'react-icons/fa'
import TypeWriter from '@/components/ui/type-writer'
import {personalInfo} from '@/data/personal-data'

const Hero = () => {
	return (
		<section
			id='hero'
			className='bg-background relative flex h-screen w-full items-center justify-center overflow-hidden'>
			{/* Animated Background Blobs */}
			<motion.div
				animate={{x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1]}}
				transition={{duration: 10, repeat: Infinity, ease: 'easeInOut'}}
				className='bg-primary/20 absolute top-20 left-20 h-72 w-72 rounded-full blur-[100px]'
			/>
			<motion.div
				animate={{x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1]}}
				transition={{duration: 12, repeat: Infinity, ease: 'easeInOut'}}
				className='bg-destructive/20 absolute right-20 bottom-20 h-96 w-96 rounded-full blur-[120px]'
			/>

			<div className='relative z-10 container mx-auto px-6 text-center'>
				{/* Greeting */}
				<motion.p
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.2}}
					className='text-primary mb-4 font-mono text-lg tracking-wide sm:text-xl'>
					Hi, my name is
				</motion.p>

				{/* Name with Gradient */}
				<motion.h1
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					transition={{delay: 0.3, type: 'spring'}}
					className='from-foreground to-muted-foreground mb-6 bg-linear-to-r via-white bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl'>
					{personalInfo.name}.
				</motion.h1>

				{/* Dynamic Role / Typewriter */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.4}}
					className='h-20 sm:h-24 md:h-28'>
					<h2 className='text-foreground mb-8 text-3xl font-bold sm:text-5xl md:text-6xl'>
						I{' '}
						<TypeWriter
							texts={[
								'turn ideas into beautiful products.',
								'create experiences, not just websites.',
								'build what users actually want.',
								'build intuitive designs that work.'
							]}
							speed={90}
						/>
					</h2>
				</motion.div>

				{/* Bio */}
				<motion.p
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{delay: 0.5}}
					className='text-muted-foreground mx-auto mb-10 max-w-4xl text-base leading-relaxed sm:text-lg'>
					{personalInfo.bio}
				</motion.p>

				{/* Icons Only (Button Removed) */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.6}}
					className='flex items-center justify-center gap-8'>
					<a
						aria-label={'github'}
						href={personalInfo.github}
						target='_blank'
						rel='noreferrer'
						className='text-muted-foreground transform transition-colors hover:scale-110 hover:text-white'>
						<FaGithub size={32} />
					</a>
					<a
						aria-label={'linkedin'}
						href={personalInfo.linkedin}
						target='_blank'
						rel='noreferrer'
						className='text-muted-foreground hover:text-primary transform transition-colors hover:scale-110'>
						<FaLinkedin size={32} />
					</a>
				</motion.div>
			</div>

			{/* Scroll Down Indicator */}
			<motion.div
				animate={{y: [0, 10, 0]}}
				transition={{duration: 2, repeat: Infinity}}
				className='text-muted-foreground/50 absolute bottom-10 left-1/2 -translate-x-1/2'>
				<FaChevronDown size={24} />
			</motion.div>
		</section>
	)
}

export default Hero
