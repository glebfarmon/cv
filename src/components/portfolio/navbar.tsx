import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
import {navLinks} from '@/constants/nav-links'
import {personalInfo} from '@/data/portfolio-data'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<motion.nav
			initial={{y: -100, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{duration: 0.8, ease: 'easeOut'}}
			className={`fixed top-4 right-0 left-0 z-50 mx-auto w-[95%] max-w-6xl rounded-md transition-all duration-300 ${
				scrolled
					? 'bg-card/20 border border-white/5 shadow-lg shadow-black/5 backdrop-blur-lg'
					: 'border-transparent bg-transparent backdrop-blur-none'
			}`}>
			<div className='flex h-16 items-center justify-between px-6'>
				{/* Logo - Scrolls to Top */}
				<Link
					to='hero'
					smooth={true}
					duration={500}
					offset={-100}
					className='from-primary to-destructive cursor-pointer bg-linear-to-r bg-clip-text font-mono text-2xl font-bold tracking-tighter text-transparent transition-transform hover:scale-105'>
					&lt;glebfarmon /&gt;
				</Link>

				{/* Desktop Links */}
				<div className='hidden h-full items-center space-x-8 md:flex'>
					{navLinks.map(link => (
						<Link
							key={link.name}
							to={link.to}
							smooth={true}
							duration={500}
							offset={-100}
							className='text-muted-foreground hover:text-primary group relative flex h-full cursor-pointer items-center text-lg font-medium transition-colors'>
							{link.name}
							<span className='bg-primary absolute bottom-4 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
						</Link>
					))}
					<a
						href={personalInfo.resumeLink}
						target='_blank'
						rel='noopener noreferrer'
						className='text-md text-primary border-primary hover:bg-primary hover:text-background hover:shadow-primary/20 transform rounded border px-5 py-2 font-mono font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5'>
						RESUME
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					className='text-foreground flex items-center focus:outline-none md:hidden'
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{opacity: 0, height: 0}}
						animate={{opacity: 1, height: 'auto'}}
						exit={{opacity: 0, height: 0}}
						className='bg-card/95 overflow-hidden rounded-b-md border-t border-white/10 backdrop-blur-xl md:hidden'>
						<div className='flex flex-col items-center space-y-6 py-6'>
							{navLinks.map(link => (
								<Link
									key={link.name}
									to={link.to}
									smooth={true}
									duration={500}
									offset={-100}
									className='text-foreground hover:text-primary cursor-pointer text-lg font-medium'
									onClick={() => setIsOpen(false)}>
									{link.name}
								</Link>
							))}
							<a
								href={personalInfo.resumeLink}
								target='_blank'
								rel='noopener noreferrer'
								className='text-primary border-primary hover:bg-primary hover:text-background rounded border px-8 py-3 text-sm font-bold transition-colors'
								onClick={() => setIsOpen(false)}>
								RESUME
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	)
}

export default Navbar
