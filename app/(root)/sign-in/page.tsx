import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

const SignInPage = () => {
	return (
		<div className='min-h-screen flex'>
			<div className='flex-1 relative'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: 'url(/assets/auth.png)',
					}}
				>
					<div className='absolute inset-0 bg-black/30'></div>
				</div>

				<div className='relative z-10 flex items-center justify-center h-full p-8'>
					<div className='text-center text-white max-w-lg'>
						<h2 className='text-4xl font-bold mb-4'>Explore Uzbekistan</h2>
						<p className='text-xl text-gray-200'>
							Discover the beauty of Central Asia with your AI-powered travel
							companion
						</p>
					</div>
				</div>
			</div>

			<div className='flex-1 flex items-center justify-center bg-gray-50 p-8'>
				<div className='w-full max-w-md'>
					<div className='mb-2 text-center mr-6'>
						<Link href='/' className='inline-flex items-center space-x-2 mb-4'>
							<div className='text-2xl font-bold'>
								<span className='text-gray-900'>Sayyoh</span>
								<span className='text-cyan-500'> AI</span>
							</div>
						</Link>
						<h1 className='text-3xl font-bold text-gray-900 mb-2'>
							Welcome back
						</h1>
						<p className='text-gray-600'>Sign in to your account to continue</p>
					</div>

					<SignIn
						appearance={{
							elements: {
								formButtonPrimary: 'bg-cyan-500 hover:bg-cyan-600 text-white',
								card: 'shadow-none border border-gray-200',
								headerTitle: 'hidden',
								headerSubtitle: 'hidden',
							},
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default SignInPage
