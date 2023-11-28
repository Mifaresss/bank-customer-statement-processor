'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/themeConfig'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<title>Bank Customer Statement Processor</title>
			</head>
			<body className={inter.className}>
				<ThemeProvider theme={theme}>
					<main className='main'>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
