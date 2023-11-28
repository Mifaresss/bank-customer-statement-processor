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

		const startBalance = parseFloat(transaction.startBalance)
		const mutation = parseFloat(transaction.mutation)
		const expectedEndBalance = startBalance + mutation
		const endBalance = parseFloat(transaction.endBalance)

		if (expectedEndBalance !== endBalance) {
			failedTransactions.push(transaction)
		}
	})

	return failedTransactions
}
