'use client'
import { useEffect, useState } from 'react'
import { Transaction } from '@/types/transaction'
import { theme } from '@/themeConfig'
import { FileInput } from '@/components/FileInput'
import { MainTable } from '@/components/MainTable'
import { ThemeProvider } from '@emotion/react'

export function Main() {
	const [data, setData] = useState<Transaction[]>([])

	return (
		<ThemeProvider theme={theme}>
			<main className='flex min-h-screen flex-col items-center gap-5 justify-center p-20'>
				<FileInput setData={setData} />
				<MainTable data={data} />
			</main>
		</ThemeProvider>
	)
}
