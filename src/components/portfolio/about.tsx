import {motion} from 'framer-motion'
import {FaGraduationCap} from 'react-icons/fa'
import SectionTitle from './section-title'
import {education} from '@/data/portfolio-data'

const About = () => {
	return (
		<section
			id='about'
			className='bg-card py-24'>
			<div className='container mx-auto px-6 lg:px-20'>
				<SectionTitle id='about-title'>About Me</SectionTitle>

				<motion.div
					className='max-w-8xl mx-auto mb-16 text-left'
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, amount: 0.3}}
					transition={{duration: 0.6}}>
					<p className='text-muted-foreground text-center text-lg leading-relaxed font-light md:text-xl'>
						<span className='text-primary mr-2 font-mono text-2xl'>Hello!</span>
						I'm Hlib, a fullstack developer who builds with people in mind. I started by creating websites that helped gaming businesses scale their product sales, and that's where I learned that great UX isn't just about features, it's about making things feel right. Now I'm excited about using AI tools to write faster, more reliable code while keeping that human touch at the center. I thrive in startups and genuinely care about shipping products that delight users.
					</p>
				</motion.div>

				<h3 className='text-primary mb-10 flex items-center font-mono text-2xl font-bold'>
					<span className='mr-4 text-3xl'>/</span> Education History
				</h3>

				{/* New Education Layout: Minimal "Tech List" style */}
				<div className='space-y-4'>
					{education.map((edu, index) => (
						<motion.div
							key={index}
							className='group bg-background hover:border-primary relative rounded-md border-l-2 border-transparent p-6 transition-all duration-300 hover:bg-white/5'
							initial={{opacity: 0, x: -20}}
							whileInView={{opacity: 1, x: 0}}
							transition={{delay: index * 0.1, duration: 0.5}}
							viewport={{once: true}}>
							<div className='flex flex-col justify-between md:flex-row md:items-center'>
								<div className='flex items-start'>
									<FaGraduationCap className='text-muted-foreground/50 group-hover:text-primary mt-1 mr-4 text-2xl transition-colors' />
									<div>
										<h4 className='text-foreground group-hover:text-primary text-xl font-bold transition-colors'>
											{edu.institution}
										</h4>
										<p className='text-muted-foreground mt-1 font-medium'>{edu.degree}</p>
									</div>
								</div>

								<div className='mt-4 text-left md:mt-0 md:text-right'>
									<p className='text-primary/80 bg-primary/10 mb-2 inline-block rounded-md px-3 py-1 font-mono text-sm'>
										{edu.duration}
									</p>
									<p className='text-muted-foreground block font-mono text-sm'>{edu.score}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default About
