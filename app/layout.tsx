import { Geist, Geist_Mono } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'
import { ChildProps } from '@/types'

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
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
