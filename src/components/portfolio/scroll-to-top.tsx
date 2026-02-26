import {useEffect, useState} from 'react'
import {FaArrowUp} from 'react-icons/fa'

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className='bg-primary text-background hover:bg-opacity-80 fixed right-6 bottom-6 z-40 cursor-pointer rounded-full p-3 shadow-lg transition-opacity focus:outline-none'
					aria-label='Scroll to top'>
					<FaArrowUp size={20} />
				</button>
			)}
		</>
	)
}

export default ScrollToTop
