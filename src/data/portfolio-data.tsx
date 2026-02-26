import {
	FaAws,
	FaCode,
	FaCss3Alt,
	FaDatabase,
	FaEnvelope,
	FaGithub,
	FaHtml5,
	FaInfinity,
	FaLinkedin,
	FaNodeJs,
	FaPhp,
	FaReact
} from 'react-icons/fa'
import {GiBearFace, GiClown} from 'react-icons/gi'
import {RiNextjsLine} from 'react-icons/ri'
import {
	SiChakraui,
	SiDocker,
	SiEslint,
	SiFigma,
	SiJavascript,
	SiJest,
	SiJira,
	SiMobx,
	SiMongodb,
	SiMonkeytie,
	SiMysql,
	SiNestjs,
	SiNx,
	SiPnpm,
	SiPostgresql,
	SiPostman,
	SiPrettier,
	SiReactquery,
	SiRedux,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiWebpack
} from 'react-icons/si'
import {TbBrandVite, TbCloudDataConnection} from 'react-icons/tb'
import {VscVscode} from 'react-icons/vsc'
import type {Education, Experience, PersonalInfo, Project, Skills, SocialLinks} from './types'

export const personalInfo: PersonalInfo = {
	name: 'Hlib Ilnytsky',
	title: 'Full Stack Developer',
	email: 'glebfarmon@gmail.com',
	linkedin: 'https://linkedin.com/in/glebfarmon',
	github: 'https://github.com/glebfarmon',
	resumeLink: '/CV_HLIB_INYTSKY_FULLSTACK.pdf',
	bio: "Full stack developer who loves building with startups. I thrive in fast-paced environments where we iterate quickly and prioritize user happiness. I'm happiest when collaborating with teams who care about impact.",
	shortBio: 'I build things for the web.'
}

export const education: Education[] = [
	{
		institution: 'University of Gdańsk',
		degree: 'Bachelor’s Degree in Computer Science',
		duration: 'Oct 2025 – Present',
		score: ''
	},
	{
		institution: 'District School Complex No. 2 in Kościerzyna',
		degree: 'IT Technician',
		duration: 'May 2022 - May 2025',
		score: 'Technician Diploma - 94%'
	}
]

export const projects: Project[] = [
	{
		title: 'AyurTrace',
		tech: ['Hyperledger Fabric', 'IoT', 'React.js', 'Smart Contracts'],
		description: [
			<>
				<span className='font-semibold text-[hsl(var(--primary))]'>
					1st Place Winner SIH 2025 Round 1
				</span>
				.
			</>,
			<>
				Directed a{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>
					blockchain-based supply chain
				</span>{' '}
				web application for Ayurvedic herb traceability.
			</>,
			<>
				Implemented{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>
					immutable on-chain tracking
				</span>{' '}
				with QR verification, ensuring{' '}
				<span className='font-semibold text-[hsl(var(--primary))]'>
					100% supply chain transparency
				</span>
				.
			</>
		],
		date: 'Aug 2025 – Sep 2025',
		githubLink: 'https://github.com/aditiarya37',
		liveLink: 'https://ayurtrace-sepia.vercel.app',
		category: 'Blockchain',
		icon: (
			<FaDatabase
				size={24}
				className='text-[hsl(var(--primary))]'
			/>
		),
		image: '/AyurTrace.png'
	},
	{
		title: 'MaViK-39',
		tech: ['RAG', 'IoT', 'React.js', 'TensorFlow', 'Cloud'],
		description: [
			<>
				<span className='font-semibold text-[hsl(var(--primary))]'>National Finalist SIH 2025</span>
				.
			</>,
			<>
				Delivered an{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>
					IoT-enabled lab management
				</span>{' '}
				web application, decreasing equipment downtime by{' '}
				<span className='font-semibold text-[hsl(var(--primary))]'>25%</span>.
			</>,
			<>
				Integrated{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>biometric authentication</span>,
				voice interface, and{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>RAG-powered AI chatbot</span>,
				improving operational efficiency by{' '}
				<span className='font-semibold text-[hsl(var(--primary))]'>40%</span>.
			</>
		],
		date: 'Nov 2025 – Dec 2025',
		githubLink: 'https://github.com/aditiarya37',
		liveLink: 'https://mavik-39.vercel.app',
		category: 'IoT & AI',
		icon: (
			<FaCode
				size={24}
				className='text-[hsl(var(--primary))]'
			/>
		),
		image: '/MaViK-39.jpeg'
	},
	{
		title: 'DevLink',
		tech: ['React JS', 'Node.js', 'Express.js', 'MongoDB'],
		description: [
			<>
				Designed and developed a{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>
					full-stack developer community platform
				</span>{' '}
				enabling users to create profiles, share projects, and collaborate.
			</>,
			<>
				Owned the system end-to-end by implementing{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>frontend architecture</span>,{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>backend APIs</span>, and{' '}
				<span className='font-medium text-[hsl(var(--foreground))]'>secure authentication</span>.
			</>
		],
		date: 'June 2025 – July 2025',
		githubLink: 'https://github.com/aditiarya37',
		liveLink: null,
		category: 'Full Stack',
		icon: (
			<FaReact
				size={24}
				className='text-[hsl(var(--primary))]'
			/>
		),
		image: '/DevLink.jpeg'
	}
]

export const skills: Skills = {
	languages: [
		{name: 'JavaScript', icon: <SiJavascript />},
		{name: 'TypeScript', icon: <SiTypescript />},
		{name: 'PHP', icon: <FaPhp />},
		{name: 'HTML5', icon: <FaHtml5 />},
		{name: 'CSS3', icon: <FaCss3Alt />}
	],
	frameworksAndLibraries: [
		{name: 'React', icon: <FaReact />},
		{name: 'Next.js', icon: <RiNextjsLine />},
		{name: 'Vite', icon: <TbBrandVite />},
		{name: 'Nx', icon: <SiNx />},
		{name: 'Redux', icon: <SiRedux />},
		{name: 'React Query', icon: <SiReactquery />},
		{name: 'RTK Query', icon: <SiRedux />},
		{name: 'MobX', icon: <SiMobx />},
		{name: 'Zustand', icon: <GiBearFace />},
		{name: 'Node JS', icon: <FaNodeJs />},
		{name: 'NestJS', icon: <SiNestjs />}
	],
	uiStyling: [
		{name: 'Shadcn', icon: <SiShadcnui />},
		{name: 'Chakra UI', icon: <SiChakraui />},
		{name: 'Tailwind', icon: <SiTailwindcss />}
	],
	databases: [
		{name: 'PostgreSQL', icon: <SiPostgresql />},
		{name: 'MongoDB', icon: <SiMongodb />},
		{name: 'MySQL', icon: <SiMysql />},
		{name: 'REST API', icon: <TbCloudDataConnection />},
		{name: 'JWT', icon: <SiMonkeytie />}
	],
	toolsAndPlatforms: [
		{name: 'Git & GitHub', icon: <FaGithub />},
		{name: 'Webpack', icon: <SiWebpack />},
		{name: 'pnpm', icon: <SiPnpm />},
		{name: 'ESLint', icon: <SiEslint />},
		{name: 'Prettier', icon: <SiPrettier />},
		{name: 'Docker', icon: <SiDocker />},
		{name: 'CI/CD', icon: <FaInfinity />},
		{name: 'AWS', icon: <FaAws />},
		{name: 'Jira', icon: <SiJira />},
		{name: 'Postman', icon: <SiPostman />},
		{name: 'VS Code', icon: <VscVscode />},
		{name: 'Figma', icon: <SiFigma />}
	],
	testing: [
		{name: 'Jest', icon: <SiJest />},
		{name: 'Playwright', icon: <GiClown />}
	],
	softSkills: ['Teamwork', 'Communication', 'Adaptability', 'Collaboration']
}

export const experience: Experience[] = [
	{
		role: 'React Developer',
		organization: 'WinWinTravel',
		duration: 'Aug 2024 - Sep 2025',
		points: [
			'Collaborated with cross-functional team on a commercial booking platform (Booking + Tinder + AI hybrid model) in a part-time capacity, delivering measurable performance and reliability improvements',
			'Implemented Optimistic Updates with React Query, enabling near-instant UI feedback (~800ms → immediate response) with automatic rollback on errors, measured via Web Vitals and user feedback',
			'Established testing culture from scratch using Jest and Playwright with TDD methodology; achieved ~40% coverage in critical components, eliminating recurring bugs and significantly improving code readability and maintainability',
			'Improved Lighthouse performance score from 60 to 90 points (35% increase) through lazy loading, code splitting, and component rendering optimization, resulting in noticeably faster page load times across hotel and tour offer sections',
			'Developed scalable React components within Nx monorepo microfrontend architecture, leveraging Chakra UI for rapid component creation and design consistency'
		]
	},
	{
		role: 'Web Development Intern',
		organization: 'Makabo Labs (Remote)',
		duration: 'Mar 2019 – Feb 2022',
		points: [
			'Designed and developed a proprietary CRM system from scratch handling payments, inventory management, invoicing, and financial reporting using vanilla PHP and MySQL, generating 15-20K PLN in total revenue across 70+ clients.',
			'Built and monetized a SaaS product by identifying market gap in Eastern European server ecosystem; demonstrated strong product-market fit with consistent customer growth (Year 1-3), establishing recurring revenue stream of 2-3K PLN/month per client implementation.',
			'Managed full product lifecycle including client onboarding, custom integrations with regional payment gateways, post-launch support, and feature development based on customer feedback.',
			'Developed secure payment processing logic and transaction architecture, ensuring compliance with payment security standards while handling financial data across multiple client environments',
			'Worked independently as solo developer, shipping production-ready code on schedule while maintaining high quality standards and managing customer relationships end-to-end'
		]
	}
]

export const socialLinks: SocialLinks = {
	linkedin: {url: personalInfo.linkedin, icon: <FaLinkedin size={24} />},
	github: {url: personalInfo.github, icon: <FaGithub size={24} />},
	email: {
		url: `mailto:${personalInfo.email}`,
		icon: <FaEnvelope size={24} />
	}
}
