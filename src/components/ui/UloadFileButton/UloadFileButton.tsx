import cn from 'classnames'
import { ChangeEvent } from 'react'

import { Button, ButtonProps } from '../Button/Button'

import './UloadFileButton.scss'

export interface UloadFileButtonProps extends ButtonProps {
	onUpload?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UloadFileButton = ({ children, className, onUpload, ...props }: UloadFileButtonProps) => {
	return (
		<Button {...props} className={cn('UloadFileButton', className)}>
			<label className="UloadFileButtonLabel">
				<input onChange={onUpload} className="UloadFileButtonInput" type="file" />
				{children}
			</label>
		</Button>
	)
}
