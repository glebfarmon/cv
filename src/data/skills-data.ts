export interface SkillsData {
	languages: string[]
	frameworksAndLibraries: string[]
	uiStyling: string[]
	databases: string[]
	toolsAndPlatforms: string[]
	testing: string[]
	softSkills: string[]
}

export const skillsData: SkillsData = {
	languages: ['JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3'],
	frameworksAndLibraries: [
		'React',
		'Next.js',
		'Vite',
		'Nx',
		'Redux',
		'React Query',
		'RTK Query',
		'MobX',
		'Zustand',
		'Node JS',
		'NestJS'
	],
	uiStyling: ['Shadcn', 'Chakra UI', 'Tailwind'],
	databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'REST API', 'JWT'],
	toolsAndPlatforms: [
		'Git & GitHub',
		'Webpack',
		'pnpm',
		'ESLint',
		'Prettier',
		'Docker',
		'CI/CD',
		'AWS',
		'Jira',
		'Postman',
		'VS Code',
		'Figma'
	],
	testing: ['Jest', 'Playwright'],
	softSkills: ['Teamwork', 'Communication', 'Adaptability', 'Collaboration']
}
