import { TransactionPage } from '@/components/TransactionPage'
import { Transaction } from '@/types/transaction'

interface Props {
	params: {
		transaction: string
	}
}

export default function Transaction({ params }: Props) {
	return <TransactionPage id={params.transaction} />
}
