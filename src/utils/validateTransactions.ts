import { Transaction } from '@/types/transaction'

export function validateTransactions(data: Transaction[]): Transaction[] {
	const referenceSet = new Set<string>()
	const failedTransactions: Transaction[] = []

	data.forEach(transaction => {
		if (referenceSet.has(transaction.reference)) {
			failedTransactions.push(transaction)
		} else {
			referenceSet.add(transaction.reference)
		}

		const startBalance = +transaction.startBalance
		const mutation = +transaction.mutation
		const expectedEndBalance = startBalance + mutation
		const endBalance = +transaction.endBalance

		if (parseFloat(expectedEndBalance.toFixed(2)) !== endBalance) {
			failedTransactions.push(transaction)
		}
	})

	return failedTransactions
}
