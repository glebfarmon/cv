import {motion} from 'framer-motion'
import {personalInfo} from '@/data/portfolio-data'

const Contact = () => {
	return (
		<section
			id='contact'
			className='bg-card relative flex items-center justify-center overflow-hidden py-32 text-center'>
			{/* Glowing circle behind */}
			<div className='bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]'></div>

			<motion.div
				initial={{opacity: 0, scale: 0.9}}
				whileInView={{opacity: 1, scale: 1}}
				viewport={{once: true}}
				transition={{duration: 0.5}}
				className='relative z-10 container mx-auto max-w-2xl px-6'>
				<p className='text-primary mb-4 font-mono text-lg'>04. What's Next?</p>
				<h2 className='text-foreground mb-6 text-4xl font-bold md:text-5xl'>Get In Touch</h2>
				<p className='text-muted-foreground mb-10 text-lg leading-relaxed'>
					Open to new opportunities in full-stack / frontend development and product-focused roles. Feel free
					to reach out!
				</p>

				<a
					href={`mailto:${personalInfo.email}`}
					className='border-primary text-primary hover:bg-primary/10 hover:shadow-primary/20 inline-block transform rounded-md border-2 px-10 py-4 font-bold shadow-lg transition-all duration-300 hover:-translate-y-1'>
					Say Hi :)
				</a>
			</motion.div>
		</section>
	)
}

export default Contact
