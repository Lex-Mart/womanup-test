import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import './InputDate.scss'

export type InputDateProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const InputDate = ({ value, onChange }: InputDateProps) => {
	return <input value={value} onChange={onChange} className="InputDate" type={'datetime-local'} />
}
