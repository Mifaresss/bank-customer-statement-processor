import s from './index.module.css'
import { Alert, Button, Input, Snackbar } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'
import Papa from 'papaparse'
import X2JS from 'x2js'
import { csvJsonFromResponse, xmlJsonFromResponse } from '@/utils/processJson'
import { validateTransactions } from '@/utils/validateTransactions'
import { Transaction } from '@/types/transaction'

interface Props {
	setData: Dispatch<SetStateAction<Transaction[]>>
}

export function FileInput({ setData }: Props) {
	const [fileName, setFileName] = useState<any | null>()
	const [error, setError] = useState(false)

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target?.files?.[0]
		if (file?.type !== 'text/csv' && file?.type !== 'text/xml') {
			setError(true)
			return
		}

		setFileName(file.name)
		if (file.type === 'text/csv') parseCSV(file)
		if (file.type === 'text/xml') parseXML(file)
	}

	const parseCSV = (file: any) => {
		Papa.parse(file, {
			complete: result => {
				const fromResponse = result.data.map(csvJsonFromResponse)
				const failed = validateTransactions(fromResponse)
				setData(failed)
			},
			header: true,
		})
	}
	const parseXML = (file: any) => {
		const reader = new FileReader()
		reader.readAsText(file)
		reader.onload = () => {
			const text = reader.result
			const parser = new X2JS()
			const result: any = parser.xml2js(text as string)
			const fromResponse = result.records.record.map(xmlJsonFromResponse)
			const failed = validateTransactions(fromResponse)
			setData(failed)
		}
	}

	return (
		<>
			<div className='flex gap-1 items-end relative'>
				<Button
					component='label'
					variant='contained'
					color='primary'
					startIcon={<CloudUploadIcon />}
				>
					Upload file
					<Input
						sx={visuallyHidden}
						type='file'
						onChange={handleFileChange}
						aria-multiselectable={false}
					/>
				</Button>
				{fileName && <span className={s.file}>{fileName}</span>}
			</div>
			{error && (
				<Snackbar
					open={error}
					autoHideDuration={3000}
					onClose={() => {
						setError(false)
					}}
				>
					<Alert
						onClose={() => {
							setError(false)
						}}
						severity='error'
						sx={{ width: '100%' }}
					>
						File format is not valid
					</Alert>
				</Snackbar>
			)}
		</>
	)
}
