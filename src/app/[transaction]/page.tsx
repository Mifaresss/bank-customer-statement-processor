import { TransactionPage } from '@/components/TransactionPage'
import { Transaction } from '@/types/transaction'

interface Props {
	transaction: string
}

export default function Transaction({ transaction }: Props) {
	return <TransactionPage id={transaction} />
}
