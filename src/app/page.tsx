import s from './page.module.css'
import { FileInput } from '@/components/FileInput'
import { MainTable } from '@/components/MainTable'
import { Main } from '@/modules/Main'
import { theme } from '@/themeConfig'
import { Transaction } from '@/types/transaction'
import { ThemeProvider } from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {}

export default function Home() {
	return <Main />
}
