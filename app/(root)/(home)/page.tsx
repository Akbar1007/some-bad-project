import { ArrowUpRight, Globe } from 'lucide-react'
import Link from 'next/link'

import Benefits from '@/components/shared/benefits'
import FeatureCard from '@/components/shared/feature-card'
import Footer from '@/components/shared/footer'
import { Button } from '@/components/ui/button'

export default function SayyohHomepage() {
	return (
		<div>
			<div className='min-h-screen relative overflow-hidden'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
					}}
				>
					<div className='absolute inset-0 bg-black/40'></div>
				</div>

				<header className='relative z-10 flex items-center justify-between px-8 py-6'>
					<Link href={'/'} className='flex items-center space-x-1 '>
						<div className='text-2xl font-bold'>
							<span className='text-white'>Sayyoh</span>
							<span className='text-cyan-400'> AI</span>
						</div>
					</Link>

					<div className='flex items-center space-x-4'>
						<div className='flex items-center space-x-1 text-white border border-white/30 px-3 py-1 rounded'>
							<Globe className='h-4 w-4' />
							<span className='text-sm'>EN</span>
						</div>
						<Button className='bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-2 cursor-pointer rounded-full text-sm'>
							<Link href={'/sign-up'}>Sign up</Link>
						</Button>
						<Button
							variant='outline'
							className='text-black px-6 py-2 rounded-full text-sm cursor-pointer hover:bg-cyan-300 border-cyan-300 hover:text-black'
						>
							<Link href={'/sign-in'}>Sign in</Link>
						</Button>
					</div>
				</header>

				{/* main Section */}
				<main
					className='relative z-10 flex flex-col items-center justify-center px-6 text-center'
					style={{ minHeight: 'calc(100vh - 200px)' }}
				>
					<div className='max-w-5xl mx-auto'>
						<h1 className='text-6xl md:text-8xl font-bold mb-12 leading-tight'>
							<span className='text-cyan-400'>Sayyoh AI</span>
							<span className='text-white'> - Your</span>
							<br />
							<span className='text-white'>Smart Travel Assistant</span>
						</h1>

						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
							<Button
								variant='outline'
								className='border-white/50 text-white hover:bg-white hover:text-black px-8 py-3 text-base bg-black/20 backdrop-blur-sm rounded-full'
							>
								<Link href={'/ai'}>Try the Demo</Link>
								<ArrowUpRight />
							</Button>
							<Button className='bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 text-base rounded-full'>
								<Link href={'/sign-up'}>Register</Link>
							</Button>
						</div>
					</div>
				</main>
			</div>

			{/* feature section */}
			<FeatureCard />

			{/* benefits section */}
			<Benefits />

			{/* footer */}
			<Footer />
		</div>
	)
}
