'use client';
import { useEffect, useState } from 'react';
import s from './index.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { apiBaseUrl } from '@/api/base';
import { Transaction, columns } from './constants';

interface Props {}

export function MainTable({}: Props) {
	const [data, setData] = useState<Transaction[]>([]);

	useEffect(() => {
		fetch(apiBaseUrl)
			.then(res => res.json())
			.then(setData);
	}, []);

	const rows = data.map(
		({ accountNumber, description, endBalance, mutation, reference, startBalance }, i) => ({
			id: i,
			reference,
			accountNumber,
			description,
			startBalance,
			mutation,
			endBalance,
		})
	);

	return <DataGrid style={{ color: 'white' }} columns={columns} rows={rows} />;
}
