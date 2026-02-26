import About from '@/components/portfolio/about'
import Contact from '@/components/portfolio/contact'
import Experience from '@/components/portfolio/experience'
import Footer from '@/components/portfolio/footer'
import Hero from '@/components/portfolio/hero'
import Navbar from '@/components/portfolio/navbar'
import Projects from '@/components/portfolio/projects'
import ScrollToTop from '@/components/portfolio/scroll-to-top'
import Skills from '@/components/portfolio/skills'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	)
}

export default App
