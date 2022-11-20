import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import cn from 'classnames'

import './TextArea.scss'

export type TextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const TextArea = ({ className, ...props }: TextAreaProps) => {
	return <textarea {...props} className={cn('TextArea', className)} />
}
