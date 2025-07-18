import { ArrowRight, ArrowUpRight, Globe } from 'lucide-react'
import Link from 'next/link'

import FeatureCard from '@/components/shared/feature-card'
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
			<div className='min-h-screen relative overflow-hidden'>
				<div className='max-w-7xl mx-auto'>
					<div
						className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80'
						style={{
							backgroundImage: 'url(/assets/home-bg-2.png)',
						}}
					>
						<div className='absolute inset-0 bg-black/40'></div>
					</div>
					<div className='min-h-screen relative overflow-hidden py-16 px-4'>
						<div className='max-w-7xl mx-auto relative z-10'>
							<div className='text-center mb-16'>
								<h1 className='text-5xl font-bold text-white mb-4'>
									Benefits:
								</h1>
								<p className='text-xl text-blue-100'>
									Your Smart Guide to Uzbekistan
								</p>
							</div>

							<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
								<div className='lg:col-span-3'>
									<div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02]'>
										<h2 className='text-2xl font-bold text-white mb-6'>
											Personalized Guidance
										</h2>
										<p className='text-blue-100 text-lg leading-relaxed mb-8'>
											Sayyoh AI adapts to your interests, schedule, and travel
											style. Every suggestion is handpicked by AI to match what
											matters most to you. From daily plans to hidden gems,
											every recommendation fits your interests, time, and pace.
										</p>
										<Link
											href={'/ai'}
											className='inline-flex items-center gap-2 text-blue-600 hover:text-white font-medium transition-colors duration-200 group'
										>
											Try it Now
											<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
										</Link>
									</div>
								</div>

								<div className='lg:col-span-1'>
									<div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02] h-full'>
										<h2 className='text-2xl font-bold text-white mb-6'>
											Personalized Guidance
										</h2>
										<p className='text-blue-100 text-lg leading-relaxed mb-8'>
											Sayyoh AI adapts to your interests, schedule, and travel
											style. Every suggestion is handpicked by AI to match what
											matters most to you. From daily plans to hidden gems,
											every recommendation fits your interests, time, and pace.
										</p>
										<Link
											href={'/ai'}
											className='inline-flex items-center gap-2 text-blue-600 hover:text-white font-medium transition-colors duration-200 group'
										>
											Try it Now
											<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
										</Link>
									</div>
								</div>

								<div className='lg:col-span-2'>
									<div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02] h-full'>
										<h2 className='text-2xl font-bold text-white mb-6'>
											Personalized Guidance
										</h2>
										<p className='text-blue-100 text-lg leading-relaxed mb-8'>
											Sayyoh AI adapts to your interests, schedule, and travel
											style. Every suggestion is handpicked by AI to match what
											matters most to you. From daily plans to hidden gems,
											every recommendation fits your interests, time, and pace.
										</p>
										<Link
											href={'/ai'}
											className='inline-flex items-center gap-2 text-blue-600 hover:text-white font-medium transition-colors duration-200 group'
										>
											Try it Now
											<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
