import { Github, Send, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-white border-t border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 py-12'>
				<div className='flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0'>
					<div className='flex flex-wrap gap-8 text-gray-600'>
						<Link
							href='/about'
							className='hover:text-gray-900 transition-colors duration-200'
						>
							About us
						</Link>
						<Link
							href='/features'
							className='hover:text-gray-900 transition-colors duration-200'
						>
							Features
						</Link>
						<Link
							href='/ai'
							className='hover:text-gray-900 transition-colors duration-200'
						>
							Try the Demo
						</Link>
						<Link
							href='/benefits'
							className='hover:text-gray-900 transition-colors duration-200'
						>
							Benefits
						</Link>
					</div>

					<div className='flex items-center space-x-4'>
						<Link
							href='https://github.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:text-blue-800 transition-colors duration-200'
						>
							<Github className='w-6 h-6' />
						</Link>
						<Link
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-400 hover:text-blue-600 transition-colors duration-200'
						>
							<Twitter className='w-6 h-6' />
						</Link>
						<Link
							href='https://telegram.org'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 hover:text-blue-700 transition-colors duration-200'
						>
							<Send className='w-6 h-6' />
						</Link>
						<Link
							href='https://youtube.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-red-600 hover:text-red-800 transition-colors duration-200'
						>
							<Youtube className='w-6 h-6' />
						</Link>
					</div>
				</div>

				<div className='border-t border-gray-200 mt-8 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
						<div className='text-gray-500 text-sm'>© 2025 Sayyoh AI</div>

						<div className='flex space-x-6 text-sm text-gray-500'>
							<Link
								href='/terms'
								className='hover:text-gray-700 transition-colors duration-200'
							>
								Terms of Service
							</Link>
							<Link
								href='/privacy'
								className='hover:text-gray-700 transition-colors duration-200'
							>
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
