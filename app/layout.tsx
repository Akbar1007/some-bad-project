import { Geist, Geist_Mono } from 'next/font/google'

import { ChildProps } from '@/types'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Sayooh AI',
	description: 'All-in-one AI assistant for your travel',
	icons: {
		icon: '/sayyoh_favicon.svg',
		shortcut: '/sayyoh_favicon.svg',
	},
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
