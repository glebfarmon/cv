import type {Project} from './types'

export const projectsData: Project[] = [
	{
		title: 'WinWinTravel',
		tech: ['React', 'Chakra UI', 'Nx', 'TypeScript'],
		description: [
			'Built AI-powered hotel discovery combining ChatGPT, Tinder-style matching, and interactive comparison tables for travelers with disabilities and pet owners',
			'Designed unique side-by-side hotel comparison feature (absent on Booking/Airbnb) with accessibility and pet policy filters',
			'Integrated biometric authentication, voice interface, and RAG-powered AI chatbot, improving operational efficiency by 40%'
		],
		githubLink: null,
		liveLink: 'https://demo.winwin.travel',
		image: '/winwintravel.jpg'
	},
	{
		title: 'CRM Auto Donate System',
		tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'CRM'],
		description: [
			'Created full-stack payment CRM system handling donations and transaction management, successfully commercialized across 70+ server deployments',
			'Engineered scalable payment modules with PCI-compliant transaction security and seamless integrations with major payment gateways',
			'Delivered custom implementations for enterprise clients generating 2K-3K PLN monthly recurring revenue with hands-on technical support'
		],
		deprecated: true,
		githubLink: null,
		liveLink: null,
		image: '/minecraft.jpg'
	}
]
