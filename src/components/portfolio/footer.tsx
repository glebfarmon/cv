import {FaHeart} from 'react-icons/fa'
import {personalInfo} from '@/data/personal-data'

const currentYear = new Date().getFullYear()

const Footer = () => {
	return (
		<footer className='bg-card py-8 text-center'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<p className='text-muted-foreground font-mono text-sm'>
					Designed & Built with <FaHeart className='text-destructive inline' /> by{' '}
					{personalInfo.name}
				</p>
				<p className='text-muted-foreground mt-1 font-mono text-xs'>
					© {currentYear} All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
