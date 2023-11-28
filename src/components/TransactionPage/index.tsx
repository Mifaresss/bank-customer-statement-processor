import s from './index.module.css'
import { useTransactionsStore } from '@/modules/Main/store'

interface Props {
	id: string
}

export function TransactionPage({ id }: Props) {
	const transactions = useTransactionsStore(state => state.transactions)
	const requiredTransaction = transactions.find(t => t.id === id)

	return <div></div>
}
