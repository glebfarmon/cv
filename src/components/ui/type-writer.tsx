import {useEffect, useState} from 'react'

interface TypewriterProps {
	texts: string[]
	speed?: number
	pause?: number
}

// Typing effect component
const TypeWriter: React.FC<TypewriterProps> = ({texts, speed = 150, pause = 1500}) => {
	const [displayedText, setDisplayedText] = useState('')
	const [index, setIndex] = useState(0)
	const [subIndex, setSubIndex] = useState(0)
	const [reverse, setReverse] = useState(false)

	useEffect(() => {
		if (index === texts.length) return

		if (subIndex === texts[index].length + 1 && !reverse) {
			setTimeout(() => setReverse(true), pause)
			return
		}

		if (subIndex === 0 && reverse) {
			setReverse(false)
			setIndex(prev => (prev + 1) % texts.length)
			return
		}

		const timeout = setTimeout(
			() => {
				setSubIndex(prev => prev + (reverse ? -1 : 1))
				setDisplayedText(texts[index].substring(0, subIndex))
			},
			reverse ? speed / 2 : speed
		)

		return () => clearTimeout(timeout)
	}, [subIndex, index, reverse, texts, speed, pause])

	return (
		<span className='text-primary'>
			{displayedText}
			<span className='animate-pulse'>|</span>
		</span>
	)
}

export default TypeWriter
