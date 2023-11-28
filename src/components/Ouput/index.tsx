'use client'
import s from './index.module.css'
import { NoData } from '../NoData'
import { useTransactionsStore } from '@/modules/Main/store'
import Link from 'next/link'

export function Output() {
	const data = useTransactionsStore(state => state.transactions)

	const rows = data.map(({ id, description, reference }) => ({
		id,
		reference,
		description,
	}))

	return data.length ? (
		<div className='flex flex-col gap-2 w-full'>
			<h1 className={s.tableTitle}>Failed transactions:</h1>
			<div className={s.wrapper}>
				<div className={s.headerCells}>
					<div className={s.headerCell}>Reference</div>
					<div className={s.headerCell}>Description</div>
				</div>
				<ul className={s.tableData}>
					{rows.map(({ id, reference, description }) => (
						<li key={id}>
							<Link className={s.item} href={id}>
								<div>{reference}</div>
								<div>{description}</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	) : (
		<NoData />
	)
}
