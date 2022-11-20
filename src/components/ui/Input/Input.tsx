import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import cn from 'classnames'

import './Input.scss'

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({ className, ...props }: InputProps) => {
	return <input {...props} className={cn('Input', className)} />
}
