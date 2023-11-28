import { Transaction } from '@/types/transaction'

export const csvJsonFromResponse = (data: any): Transaction => ({
	id: crypto.randomUUID(),
	accountNumber: data['Account Number'],
	description: data['Description'],
	endBalance: data['End Balance'],
	mutation: data['Mutation'],
	reference: data['Reference'],
	startBalance: data['Start Balance'],
})

export const xmlJsonFromResponse = (data: any): Transaction => ({
	id: crypto.randomUUID(),
	accountNumber: data.accountNumber,
	description: data.description,
	endBalance: data.endBalance,
	mutation: data.mutation,
	reference: data._reference,
	startBalance: data.startBalance,
})
