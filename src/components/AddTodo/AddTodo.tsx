import { ChangeEvent, useState } from 'react'

import { useTodo } from '../../hooks/useTodo'
import { Button, Input } from '../ui'

import './AddTodo.scss'

export const AddTodo = () => {
	const [input, setInput] = useState('')
	const { createTodo } = useTodo()

	const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	const addHandle = () => {
		if (input !== '') {
			createTodo(input)
			setInput('')
		}
	}

	const enterKeyHandle = (key: string) => {
		if (key === 'Enter') {
			addHandle()
		}
	}

	return (
		<div className="AddTodo card">
			<h2 className="title">Добавить задачу</h2>
			<div className="form">
				<Input value={input} onChange={inputHandle} onKeyUp={(e) => enterKeyHandle(e.key)} />
				<Button onClick={addHandle} disabled={!input} className="formBtn">
					добавить
				</Button>
			</div>
		</div>
	)
}
