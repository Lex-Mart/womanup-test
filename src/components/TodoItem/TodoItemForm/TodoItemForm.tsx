import { ChangeEvent } from 'react'

import { Input, TextArea } from '../../ui'

import './TodoItemForm.scss'

export interface TodoItemFormProps {
	isEdit: boolean
	title: string
	description: string
	fileLink: string
	onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const TodoItemForm = ({
	isEdit,
	title,
	description,
	fileLink,
	onChangeTitle,
	onChangeDescription,
}: TodoItemFormProps) => {
	if (isEdit) {
		return (
			<div className="TodoItemForm">
				<Input value={title} onChange={onChangeTitle} />
				<TextArea className="descriptionForm" value={description} onChange={onChangeDescription} />
			</div>
		)
	}

	return (
		<div className="TodoItemForm">
			<div className="todoTitle">
				{title} {fileLink && <a href={fileLink}>📂</a>}
			</div>
			<div className={'todoDescription'}>{description || 'добавьте описание'}</div>
		</div>
	)
}
