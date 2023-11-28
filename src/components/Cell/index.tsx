'use client'
import s from './index.module.css'
import { TableCell } from '@mui/material'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function Cell({ children }: Props) {
	return (
		<TableCell className={s.cell} align='left'>
			{children}
		</TableCell>
	)
}
