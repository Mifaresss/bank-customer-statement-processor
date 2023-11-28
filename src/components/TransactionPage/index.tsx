'use client'
import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
} from '@mui/material'
import s from './index.module.css'
import { useTransactionsStore } from '@/modules/Main/store'
import Link from 'next/link'

interface Props {
	id: string
}

export function TransactionPage({ id }: Props) {
	const transactions = useTransactionsStore(state => state.transactions)
	const requiredTransaction = transactions.find(t => t.id === id)

	return (
		<div className={s.wrapper}>
			<Link className={s.link} href='/'>
				Return to Main page
			</Link>
			<TableContainer className={s.table} component={Paper}>
				<Table sx={{ minWidth: 650 }} color='#EED546' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Reference</TableCell>
							<TableCell>AccountNumber</TableCell>
							<TableCell>Description</TableCell>
							<TableCell>StartBalance</TableCell>
							<TableCell>Mutation</TableCell>
							<TableCell>EndBalance</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell>{requiredTransaction?.reference}</TableCell>
							<TableCell>{requiredTransaction?.accountNumber}</TableCell>
							<TableCell>{requiredTransaction?.description}</TableCell>
							<TableCell>{requiredTransaction?.startBalance}</TableCell>
							<TableCell>{requiredTransaction?.mutation}</TableCell>
							<TableCell>{requiredTransaction?.endBalance}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}
