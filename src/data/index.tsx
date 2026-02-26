import {
	FaAws,
	FaCss3Alt,
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
import type {Skills, SocialLinks} from './types'
import {personalInfo} from './personal-data'
import {skillsData} from './skills-data'

// Icon mapping for skills
const skillIconMap: Record<string, React.ReactNode> = {
	JavaScript: <SiJavascript />,
	TypeScript: <SiTypescript />,
	PHP: <FaPhp />,
	HTML5: <FaHtml5 />,
	CSS3: <FaCss3Alt />,
	React: <FaReact />,
	'Next.js': <RiNextjsLine />,
	Vite: <TbBrandVite />,
	Nx: <SiNx />,
	Redux: <SiRedux />,
	'React Query': <SiReactquery />,
	'RTK Query': <SiRedux />,
	MobX: <SiMobx />,
	Zustand: <GiBearFace />,
	'Node JS': <FaNodeJs />,
	NestJS: <SiNestjs />,
	Shadcn: <SiShadcnui />,
	'Chakra UI': <SiChakraui />,
	Tailwind: <SiTailwindcss />,
	PostgreSQL: <SiPostgresql />,
	MongoDB: <SiMongodb />,
	MySQL: <SiMysql />,
	'REST API': <TbCloudDataConnection />,
	JWT: <SiMonkeytie />,
	'Git & GitHub': <FaGithub />,
	Webpack: <SiWebpack />,
	pnpm: <SiPnpm />,
	ESLint: <SiEslint />,
	Prettier: <SiPrettier />,
	Docker: <SiDocker />,
	'CI/CD': <FaInfinity />,
	AWS: <FaAws />,
	Jira: <SiJira />,
	Postman: <SiPostman />,
	'VS Code': <VscVscode />,
	Figma: <SiFigma />,
	Jest: <SiJest />,
	Playwright: <GiClown />
}

// Transform skills data with icons
export const skills: Skills = {
	languages: skillsData.languages.map(name => ({
		name,
		icon: skillIconMap[name]
	})),
	frameworksAndLibraries: skillsData.frameworksAndLibraries.map(name => ({
		name,
		icon: skillIconMap[name]
	})),
	uiStyling: skillsData.uiStyling.map(name => ({
		name,
		icon: skillIconMap[name]
	})),
	databases: skillsData.databases.map(name => ({
		name,
		icon: skillIconMap[name]
	})),
	toolsAndPlatforms: skillsData.toolsAndPlatforms.map(name => ({
		name,
		icon: skillIconMap[name]
	})),
	testing: skillsData.testing.map(name => ({
		name,
		icon: skillIconMap[name]
	})),
	softSkills: skillsData.softSkills
}

// Social links with icons
export const socialLinks: SocialLinks = {
	linkedin: {url: personalInfo.linkedin, icon: <FaLinkedin size={24} />},
	github: {url: personalInfo.github, icon: <FaGithub size={24} />},
	email: {
		url: `mailto:${personalInfo.email}`,
		icon: <FaEnvelope size={24} />
	}
}

// Re-export for backward compatibility
export {personalInfo, education, experience} from './personal-data'
export {projectsData} from './projects-data'
