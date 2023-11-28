import s from './index.module.css'

interface Props {}

export function NoData({}: Props) {
	return (
		<div className={s.wrapper}>
			<div className={s.noData}>No data</div>
		</div>
	)
}
