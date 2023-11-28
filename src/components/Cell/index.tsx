'use client'
import s from './index.module.css'
import { ReactNode } from 'react'
import { TableCell } from '@mui/material'

interface Props {
	children: ReactNode
}

export function Cell({ children }: Props) {
	return (
		<TableCell style={{ color: 'white' }} align='left'>
			{children}
		</TableCell>
	)
}
