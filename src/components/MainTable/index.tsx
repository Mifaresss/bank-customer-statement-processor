'use client'
import s from './index.module.css'
import { TableContainer, Paper, Table, TableHead, TableRow, TableBody } from '@mui/material'
import { NoData } from '../NoData'
import { Cell } from '../Cell'
import { Transaction } from '@/types/transaction'

interface Props {
	data: Transaction[]
}

export function MainTable({ data = [] }: Props) {
	const rows = data.map(
		({ accountNumber, description, endBalance, mutation, reference, startBalance }) => ({
			reference,
			accountNumber,
			description,
			startBalance,
			mutation,
			endBalance,
		}),
	)

	return data.length ? (
		<div className={s.wrapper}>
			<h1 className={s.tableTitle}>Failed transactions</h1>
			<TableContainer className={s.table} component={Paper}>
				<Table sx={{ minWidth: 650 }} color='#EED546' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<Cell>Reference</Cell>
							<Cell>AccountNumber</Cell>
							<Cell>Description</Cell>
							<Cell>StartBalance</Cell>
							<Cell>Mutation</Cell>
							<Cell>EndBalance</Cell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, i) => (
							<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<Cell>{row.reference}</Cell>
								<Cell>{row.accountNumber}</Cell>
								<Cell>{row.description}</Cell>
								<Cell>{row.startBalance}</Cell>
								<Cell>{row.mutation}</Cell>
								<Cell>{row.endBalance}</Cell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	) : (
		<NoData />
	)
}
