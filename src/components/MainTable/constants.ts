import { apiBaseUrl } from '@/api/base';

export const columns = [
	{ field: 'reference', headerName: 'Reference', width: 100 },
	{ field: 'accountNumber', headerName: 'AccountNumber', width: 200 },
	{ field: 'description', headerName: 'Description', width: 200 },
	{ field: 'startBalance', headerName: 'StartBalance', width: 100 },
	{ field: 'mutation', headerName: 'Mutation', width: 100 },
	{ field: 'endBalance', headerName: 'EndBalance', width: 100 },
];

export interface Transaction {
	reference: string;
	accountNumber: string;
	description: string;
	startBalance: number;
	mutation: number;
	endBalance: number;
}
