import {motion} from 'framer-motion'
import SectionTitle from './section-title'
import {experience} from '@/data/personal-data'

const Experience = () => {
	return (
		<section
			id='experience'
			className='bg-card relative overflow-hidden py-24'>
			{/* Background decoration */}
			<div className='pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden opacity-5'>
				<div className='bg-primary absolute top-10 right-10 h-64 w-64 rounded-full blur-[80px]'></div>
			</div>

			<div className='container mx-auto px-6 lg:px-20'>
				<SectionTitle>Experiences</SectionTitle>

				<div className='relative mt-16'>
					{/* Vertical Line */}
					<div className='from-primary via-destructive absolute top-0 bottom-0 left-4 w-0.5 bg-linear-to-b to-transparent opacity-30 md:left-1/2'></div>

					<div className='space-y-12'>
						{experience.map((exp, index) => (
							<motion.div
								key={index}
								initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true}}
								transition={{duration: 0.5, delay: index * 0.1}}
								className={`relative flex flex-col md:flex-row ${
									index % 2 === 0 ? 'md:flex-row-reverse' : ''
								} items-start md:items-center`}>
								{/* Timeline Dot */}
								<div className='bg-background border-primary absolute left-4 z-10 h-4 w-4 -translate-x-[calc(50%-0.5px)] rounded-full border-2 shadow-[0_0_10px_rgba(0,245,195,0.8)] md:left-1/2'></div>

								{/* Date (Opposite side) */}
								<div
									className={`pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'text-left md:pl-12' : 'md:pr-12 md:text-right'} mb-2 md:mb-0`}>
									<span className='text-primary font-mono text-sm'>{exp.duration}</span>
								</div>

								{/* Content Card */}
								<div
									className={`pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
									<div className='bg-background/80 hover:border-primary/30 group rounded-xl border border-white/5 p-6 shadow-lg backdrop-blur-md transition-colors'>
										<h3 className='text-foreground group-hover:text-primary text-xl font-bold transition-colors'>
											{exp.role}
										</h3>
										<h4 className='text-destructive mb-4 text-lg font-semibold'>
											{exp.organization}
										</h4>
										<ul className='space-y-2'>
											{exp.points.map((point, i) => (
												<li
													key={i}
													className='text-muted-foreground/90 flex items-start text-sm'>
													<span className='text-primary mt-1.5 mr-2'>▹</span>
													<span>{point}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
