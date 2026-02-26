import type {Education, Experience, PersonalInfo} from './types'

export const personalInfo: PersonalInfo = {
	name: 'Hlib Ilnytsky',
	title: 'Full Stack Developer',
	email: 'glebfarmon@gmail.com',
	linkedin: 'https://linkedin.com/in/glebfarmon',
	github: 'https://github.com/glebfarmon',
	resumeLink: '/CV_HLIB_ILNYTSKY_FULLSTACK.pdf',
	bio: "Full stack developer who loves building with startups. I thrive in fast-paced environments where we iterate quickly and prioritize user happiness. I'm happiest when collaborating with teams who care about impact.",
	shortBio: 'I build things for the web.'
}

export const education: Education[] = [
	{
		institution: 'University of Gdańsk',
		degree: "Bachelor's Degree in Computer Science",
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
		role: 'Fullstack Developer & Product Owner',
		organization: '',
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
