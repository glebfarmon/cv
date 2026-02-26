import {motion} from 'framer-motion'
import SectionTitle from './section-title'
import {skills} from '@/data/portfolio-data'
import type {SkillItem} from '@/data/types'

interface SkillCategoryProps {
	title: string
	items: SkillItem[]
	delayOffset: number
}

const SkillCategory: React.FC<SkillCategoryProps> = ({title, items, delayOffset}) => (
	<motion.div
		initial={{opacity: 0, y: 20}}
		whileInView={{opacity: 1, y: 0}}
		viewport={{once: true}}
		transition={{delay: delayOffset, duration: 0.5}}
		className='w-full'>
		{/* Category Title */}
		<h3 className='text-primary mb-8 flex items-center gap-4 text-2xl font-semibold md:text-3xl'>
			<span className='bg-primary/50 inline-block h-0.5 w-12'></span>
			{title}
		</h3>

		{/* Skills Container - Flex Wrap for row layout */}
		<div className='flex flex-wrap gap-5'>
			{items.map((skill, index) => (
				<motion.div
					key={index}
					whileHover={{scale: 1.05, y: -5}}
					className='bg-card hover:border-destructive/50 hover:shadow-destructive/15 flex cursor-default items-center gap-4 rounded-md border border-white/5 px-6 py-4 transition-all duration-300 hover:shadow-lg'>
					<span className='text-primary text-3xl'>{skill.icon}</span>
					<span className='text-foreground text-lg font-medium'>{skill.name}</span>
				</motion.div>
			))}
		</div>
	</motion.div>
)

const Skills = () => {
	return (
		<section
			id='skills'
			className='bg-background relative py-32'>
			{/* Background subtle grid */}
			<div className='pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)] bg-size-[50px_50px]'></div>

			<div className='relative z-10 container mx-auto px-6'>
				<SectionTitle>Technologies I Work With</SectionTitle>

				<div className='mx-auto mt-20 max-w-7xl'>
					{/* Vertical Stack Layout (Separate Rows) with large gaps */}
					<div className='flex flex-col gap-16'>
						<SkillCategory
							title='Languages'
							items={skills.languages}
							delayOffset={0.1}
						/>
						<SkillCategory
							title='Frameworks & Libraries'
							items={skills.frameworksAndLibraries}
							delayOffset={0.2}
						/>
						<SkillCategory
							title='UI & Styling'
							items={skills.uiStyling}
							delayOffset={0.3}
						/>
						<SkillCategory
							title='Databases'
							items={skills.databases}
							delayOffset={0.4}
						/>
						<SkillCategory
							title='Tools & Platforms'
							items={skills.toolsAndPlatforms}
							delayOffset={0.5}
						/>
						<SkillCategory
							title='Testing'
							items={skills.testing}
							delayOffset={0.6}
						/>
					</div>

					{/* Soft Skills as Tags */}
					<motion.div
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						viewport={{once: true}}
						className='mt-24 text-center'>
						<h3 className='text-destructive mb-8 font-mono text-lg tracking-widest uppercase'>
							Soft Skills
						</h3>

						<div className='flex flex-wrap justify-center gap-4'>
							{skills.softSkills.map((skill, i) => (
								<span
									key={i}
									className='text-muted-foreground border-muted-foreground/20 hover:border-primary rounded-full border px-6 py-2 text-base transition-colors duration-300 hover:text-white md:text-lg'>
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Skills
