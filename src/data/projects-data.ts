import type {Project} from './types'

export const projectsData: Project[] = [
	{
		title: 'AyurTrace',
		tech: ['Hyperledger Fabric', 'IoT', 'React.js', 'Smart Contracts'],
		description: [
			'1st Place Winner SIH 2025 Round 1',
			'Directed a blockchain-based supply chain web application for Ayurvedic herb traceability',
			'Implemented immutable on-chain tracking with QR verification, ensuring 100% supply chain transparency'
		],
		date: 'Aug 2025 – Sep 2025',
		githubLink: 'https://github.com/aditiarya37',
		liveLink: 'https://ayurtrace-sepia.vercel.app',
		category: 'Blockchain',
		image: '/AyurTrace.png'
	},
	{
		title: 'MaViK-39',
		tech: ['RAG', 'IoT', 'React.js', 'TensorFlow', 'Cloud'],
		description: [
			'National Finalist SIH 2025',
			'Delivered an IoT-enabled lab management web application, decreasing equipment downtime by 25%',
			'Integrated biometric authentication, voice interface, and RAG-powered AI chatbot, improving operational efficiency by 40%'
		],
		date: 'Nov 2025 – Dec 2025',
		githubLink: 'https://github.com/aditiarya37',
		liveLink: 'https://mavik-39.vercel.app',
		category: 'IoT & AI',
		image: '/MaViK-39.jpeg'
	},
	{
		title: 'DevLink',
		tech: ['React JS', 'Node.js', 'Express.js', 'MongoDB'],
		description: [
			'Designed and developed a full-stack developer community platform enabling users to create profiles, share projects, and collaborate',
			'Owned the system end-to-end by implementing frontend architecture, backend APIs, and secure authentication'
		],
		date: 'June 2025 – July 2025',
		githubLink: 'https://github.com/aditiarya37',
		liveLink: null,
		category: 'Full Stack',
		image: '/DevLink.jpeg'
	}
]
