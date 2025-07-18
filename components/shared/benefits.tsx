import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Benefits = () => {
	return (
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
							<h1 className='text-5xl font-bold text-white mb-4'>Benefits:</h1>
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
										matters most to you. From daily plans to hidden gems, every
										recommendation fits your interests, time, and pace.
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
										matters most to you. From daily plans to hidden gems, every
										recommendation fits your interests, time, and pace.
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
										matters most to you. From daily plans to hidden gems, every
										recommendation fits your interests, time, and pace.
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
	)
}

export default Benefits
