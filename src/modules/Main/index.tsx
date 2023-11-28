'use client'
import { theme } from '@/themeConfig'
import { FileInput } from '@/components/FileInput'
import { Output } from '@/components/Ouput'
import { ThemeProvider } from '@emotion/react'
import s from './index.module.css'

export function Main() {
	return (
		<div className={s.wrapper}>
			<FileInput />
			<Output />
		</div>
	)
}
