import cn from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import './Button.scss'

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button {...props} className={cn('Button', className)}>
			{children}
		</button>
	)
}
