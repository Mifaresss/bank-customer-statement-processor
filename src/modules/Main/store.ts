import { Transaction } from '@/types/transaction'
import { create } from 'zustand'

interface State {
	transactions: Transaction[]
}
interface Actions {
	setTransactions: (transactions: Transaction[]) => void
}

export const useTransactionsStore = create<State & Actions>(set => ({
	transactions: [],
	setTransactions: transactions => set({ transactions }),
}))
