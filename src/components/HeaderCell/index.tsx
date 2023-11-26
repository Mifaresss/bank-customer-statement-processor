import s from './index.module.css'

interface Props {
	title: string
}

export function HeaderCell({title}: Props) {

	return (
		<div className={s.headerCell}>{title}</div>
	)
}
