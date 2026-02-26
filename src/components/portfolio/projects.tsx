import {motion} from 'framer-motion'
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'
import SectionTitle from './section-title'
import {projects} from '@/data/portfolio-data'

const Projects = () => {
	return (
		<section
			id='projects'
			className='bg-background py-32'>
			<div className='container mx-auto px-6 lg:px-12'>
				<SectionTitle>Some Things I've Built</SectionTitle>

				<div className='mt-20 flex flex-col gap-24'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 50}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.6, delay: index * 0.1}}
							viewport={{once: true, amount: 0.2}}
							className={`flex flex-col items-center gap-12 lg:flex-row ${
								index % 2 === 1 ? 'lg:flex-row-reverse' : ''
							}`}>
							{/* Image Section - BIG and VISUAL */}
							<div className='group relative w-full lg:w-3/5'>
								<div className='group-hover:border-primary/30 relative overflow-hidden rounded-md border border-white/10 shadow-2xl transition-all duration-300'>
									{/* Overlay */}
									<div className='bg-card/20 absolute inset-0 z-10 transition-all duration-500 group-hover:bg-transparent'></div>
									<img
										src={
											project.image ||
											'https://placehold.co/800x500/1a1a2e/00f5c3?text=Project+Preview'
										}
										alt={project.title}
										className='h-auto w-full transform object-cover grayscale transition-transform duration-700 group-hover:grayscale-0'
									/>
								</div>
								{/* Decorative blob behind image */}
								<div
									className={`bg-primary/20 absolute -inset-4 -z-10 rounded-md opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 ${
										index % 2 === 1 ? 'right-0' : 'left-0'
									}`}></div>
							</div>

							{/* Text Section */}
							<div className='relative z-20 flex w-full flex-col items-start lg:w-2/5'>
								<p className='text-primary mb-2 font-mono text-sm'>Featured Project</p>
								<h3 className='text-foreground hover:text-primary mb-6 cursor-pointer text-3xl font-bold transition-colors'>
									{project.title}
								</h3>

								{/* Description Box - Updated to support list */}
								<div className='bg-card mb-6 rounded-md border border-white/5 p-6 shadow-xl transition-shadow hover:shadow-2xl'>
									<ul className='text-muted-foreground list-none space-y-2 leading-relaxed'>
										{project.description.map((point, i) => (
											<li
												key={i}
												className='flex items-start'>
												<span className='text-primary mt-1 mr-2'>▹</span>
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Tech Stack */}
								<ul className='text-muted-foreground/80 mb-8 flex flex-wrap gap-4 font-mono text-sm'>
									{project.tech.map((tech, i) => (
										<li
											key={i}
											className='hover:text-primary transition-colors'>
											{tech}
										</li>
									))}
								</ul>

								{/* Links - Redesigned as Buttons */}
								<div className='flex items-center gap-4'>
									{project.githubLink && (
										<a
											href={project.githubLink}
											target='_blank'
											rel='noreferrer'
											className='border-muted-foreground/30 text-foreground hover:border-primary hover:text-primary group flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300'>
											<FaGithub
												size={18}
												className='transition-transform group-hover:scale-110'
											/>
											<span>GitHub Repo</span>
										</a>
									)}
									{project.liveLink && (
										<a
											href={project.liveLink}
											target='_blank'
											rel='noreferrer'
											className='border-muted-foreground/30 text-foreground hover:border-primary hover:text-primary group flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300'>
											<FaExternalLinkAlt
												size={16}
												className='transition-transform group-hover:scale-110'
											/>
											<span>Live Demo</span>
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
