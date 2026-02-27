import {lazy, Suspense} from 'react'
import Navbar from '@/components/portfolio/navbar'
import Hero from '@/components/portfolio/hero'
import Footer from '@/components/portfolio/footer'
import ScrollToTop from '@/components/portfolio/scroll-to-top'

// Lazy load below-the-fold components to reduce initial bundle
const About = lazy(() => import('@/components/portfolio/about'))
const Skills = lazy(() => import('@/components/portfolio/skills'))
const Projects = lazy(() => import('@/components/portfolio/projects'))
const Experience = lazy(() => import('@/components/portfolio/experience'))
const Contact = lazy(() => import('@/components/portfolio/contact'))

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<main>
				<Hero />
				<Suspense fallback={<div className='h-screen' />}>
					<About />
					<Skills />
					<Projects />
					<Experience />
					<Contact />
				</Suspense>
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	)
}

export default App
