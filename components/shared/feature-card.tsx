import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// Example constants file structure - you can replace this with your actual constants

interface InteractiveCardProps {
	title: string
	description: string
	buttonText: string
	icon: React.ComponentType
	tagText?: string
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
	title,
	description,
	buttonText,
	icon: Icon,
	tagText = 'Navigate Intuitively',
}) => {
	return (
		<div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl relative overflow-hidden'>
			{/* Decorative background elements */}
			<div className='absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16'></div>
			<div className='absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full translate-y-12 -translate-x-12'></div>

			<div className='relative z-10'>
				{/* Tag */}
				<div className='inline-block mb-6'>
					<span className='px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium'>
						{tagText}
					</span>
				</div>

				{/* Content container */}
				<div className='flex items-start justify-between gap-8'>
					{/* Left content */}
					<div className='flex-1'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6 leading-tight'>
							{title}
						</h2>

						<p className='text-gray-600 text-lg mb-8 leading-relaxed'>
							{description}
						</p>

						<Link
							href={'/ai'}
							className='inline-flex items-center text-blue-500 hover:text-blue-600 text-lg font-medium transition-colors duration-200 group underline'
						>
							{buttonText}
							<ArrowRight className='ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200' />
						</Link>
					</div>

					{/* Right icon */}
					<div className='flex-shrink-0'>
						<div className='text-gray-800'>
							<Icon />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const ICONS = {
	map: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='82'
			height='82'
			viewBox='0 0 82 82'
			fill='none'
		>
			<path
				d='M53.5 16V78.5M53.5 16L78.5 3.5V66L53.5 78.5M53.5 16L28.5 3.5M53.5 78.5L28.5 66M28.5 66L3.5 78.5V16L28.5 3.5M28.5 66V3.5'
				stroke='black'
				stroke-width='6'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	),
	location: () => (
		<svg
			width='80'
			height='80'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
		>
			<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
			<circle cx='12' cy='10' r='3' />
		</svg>
	),
	building: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100'
			height='100'
			viewBox='0 0 100 100'
			fill='none'
		>
			<path
				d='M8.33325 83.3334H16.6666M16.6666 83.3334H37.4999M16.6666 83.3334V30.0008C16.6666 25.3337 16.6666 22.9984 17.5749 21.2158C18.3738 19.6478 19.6477 18.3739 21.2157 17.575C22.9983 16.6667 25.3336 16.6667 30.0007 16.6667H36.6674C41.3345 16.6667 43.6648 16.6667 45.4474 17.575C47.0154 18.3739 48.2936 19.6478 49.0925 21.2158C49.9999 22.9967 49.9999 25.3292 49.9999 29.9871V41.6675M37.4999 83.3334H83.3333M37.4999 83.3334V59.8674C37.4999 57.6783 37.4999 56.5833 37.7624 55.5624C37.9951 54.6575 38.378 53.7994 38.8956 53.0216C39.4793 52.1445 40.2963 51.4101 41.9229 49.9488L51.5128 41.3332C54.6576 38.508 56.2311 37.0943 58.0103 36.558C59.5788 36.0852 61.2529 36.0852 62.8214 36.558C64.602 37.0948 66.1777 38.5092 69.3277 41.3391L78.9111 49.9488C80.5395 51.4117 81.3521 52.144 81.9361 53.0216C82.4537 53.7994 82.8361 54.6575 83.0688 55.5624C83.3313 56.5833 83.3333 57.6783 83.3333 59.8674V83.3334M83.3333 83.3334H91.6666'
				stroke='black'
				stroke-width='6'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	),
	chat: () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100'
			height='100'
			viewBox='0 0 100 100'
			fill='none'
		>
			<path
				d='M38.9089 66.6269C52.0607 65.8965 62.5 55.0011 62.5 41.6667C62.5 27.8596 51.3071 16.6667 37.5 16.6667C23.6929 16.6667 12.5 27.8596 12.5 41.6667C12.5 46.5863 13.9206 51.1738 16.3745 55.0415L14.6077 60.3419L14.6049 60.3497C13.9282 62.3798 13.5897 63.3953 13.8308 64.0712C14.0408 64.6602 14.507 65.1245 15.096 65.3346C15.7697 65.5748 16.7781 65.2386 18.7945 64.5665L18.8232 64.5577L24.1252 62.791C27.9929 65.2449 32.5806 66.6659 37.5002 66.6659C37.973 66.6659 38.4427 66.6528 38.9089 66.6269ZM38.9089 66.6269C38.9093 66.6279 38.9086 66.6259 38.9089 66.6269ZM38.9089 66.6269C42.3295 76.3579 51.6004 83.334 62.5006 83.334C67.4202 83.334 72.0069 81.9118 75.8744 79.4576L81.1751 81.2244L81.1855 81.2265C83.2153 81.9031 84.2326 82.2422 84.9085 82.0012C85.4975 81.7912 85.9578 81.3268 86.1678 80.7378C86.4092 80.0609 86.0717 79.0442 85.3931 77.0086L83.6263 71.7082L84.2181 70.7276C86.3074 67.0748 87.4977 62.843 87.4977 58.3334C87.4977 44.5263 76.3071 33.3334 62.5 33.3334L61.5641 33.3506L61.0921 33.3737'
				stroke='black'
				stroke-width='6'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	),
}

// Example usage component showing how to use it with different content
const FeatureCard = () => {
	return (
		<div className='relative min-h-screen'>
			{/* Background image with overlay */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: 'url(/assets/home-bg-1.png)',
				}}
			>
				<div className='absolute inset-0 bg-black/40'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 p-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
					<InteractiveCard
						title='Discover Uzbekistan with an Interactive Map'
						description='Visualize cities, regions, and hidden gems in seconds. Our smart map helps you explore landmarks, routes, and cultural hotspots without ever feeling lost.'
						buttonText='Explore the Map'
						icon={ICONS.map}
						tagText='Navigate Intuitively'
					/>

					<InteractiveCard
						title='Find Places to Visit -Right Around You'
						description="Let the app suggest attractions, cafés, markets, historical sites, hotels and more based on where you are. Never miss what's just around the corner."
						buttonText='Try it Now'
						icon={ICONS.location}
						tagText='Location-aware Suggestions'
					/>

					<InteractiveCard
						title='Learn the Story Behind Each and Every Place'
						description="Explore the rich history and significance of Uzbekistan's most iconic sites — explained in plain and engaging language by your AI guide companion."
						buttonText='Learn More'
						icon={ICONS.building}
						tagText='Travel Deeper'
					/>

					<InteractiveCard
						title='Your Friendly AI Travel Companion'
						description='Get real-time answers about where to go, what to do, or what that landmark even means — all through a natural, human-like chats.'
						buttonText='Chat with AI now'
						icon={ICONS.chat}
						tagText='Ask Anything'
					/>
				</div>
			</div>
		</div>
	)
}

export default FeatureCard
