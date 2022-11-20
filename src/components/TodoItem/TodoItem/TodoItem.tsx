import { ChangeEvent, useEffect, useState } from 'react'
import cn from 'classnames'

import { Todo } from '../../../interfaces'
import { TodoItemForm } from '../TodoItemForm/TodoItemForm'
import { Button, InputDate, UloadFileButton } from '../../ui'
import { lessThanNow, parseDate } from '../../../lib'

import './TodoItem.scss'

export interface TodoItemProps {
	todo: Todo
	delteTodo: () => void
	updateTodo: (todo: Todo) => void
	uploadFile: (file: File) => void
}

export const TodoItem = ({ todo, delteTodo, updateTodo, uploadFile }: TodoItemProps) => {
	const [isEdit, setIsEdit] = useState(false)
	const [title, setTitle] = useState(todo.title)
	const [description, setDescription] = useState(todo.description)
	const [completed, setCompleted] = useState(todo.completed)
	const [expireTime, setExpireTime] = useState(todo.expireTime)

	useEffect(() => {
		if (
			title !== todo.title ||
			description !== todo.description ||
			completed !== todo.completed ||
			expireTime !== todo.expireTime
		) {
			updateTodo({
				id: todo.id,
				completed,
				description,
				title,
				fileLink: todo.fileLink,
				expireTime,
			})
		}
	}, [isEdit, completed])

	const uploadHandle = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files) return
		const file = files[0]
		uploadFile(file)
	}

	const isDisplayExpireTime = !!expireTime && !isEdit
	const isTimeEpired = lessThanNow(expireTime)

	return (
		<div className={cn('TodoItem card', { expired: isTimeEpired, completed: completed })}>
			<TodoItemForm
				title={title}
				description={description}
				isEdit={isEdit}
				fileLink={todo.fileLink}
				onChangeTitle={(e) => setTitle(e.target.value)}
				onChangeDescription={(e) => setDescription(e.target.value)}
			/>
			<div className="todoRight">
				<div className="todoControl">
					<Button onClick={() => setIsEdit((prev) => !prev)}>{isEdit ? '📄' : '🖌️'}</Button>
					<Button onClick={() => setCompleted((prev) => !prev)}>{completed ? '❌' : '✅'}</Button>
					<UloadFileButton onUpload={uploadHandle}>📎</UloadFileButton>
					<Button onClick={delteTodo}>🗑️</Button>
				</div>
				<div className="expireTime">
					{isDisplayExpireTime && <>до {parseDate(expireTime)}</>}
					{isEdit && (
						<>
							до <InputDate value={expireTime} onChange={(e) => setExpireTime(e.target.value)} />
						</>
					)}
				</div>
			</div>
		</div>
	)
}
