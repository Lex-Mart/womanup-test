import { createContext, FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

import { Todo } from '../interfaces'
import { api } from '../services'

interface Context {
	todos: Todo[]
	createTodo: (todoTitle: string) => void
	updateTodo: (todo: Todo) => void
	deleteTodo: (todoId: string) => void
	uploadFile: (todo: Todo, file: File) => void
}

export const TodoContext = createContext<Context>({
	todos: [],
	createTodo: () => undefined,
	updateTodo: () => undefined,
	deleteTodo: () => undefined,
	uploadFile: () => undefined,
})

export const TodoProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([])

	useEffect(() => {
		const unsubscribe = api.subscribeTodosUpdate((todos) => {
			setTodos(todos)
		})
		return () => unsubscribe()
	}, [])

	const createTodo = useCallback((title: string) => api.createTodo(title), [])
	const updateTodo = useCallback((todo: Todo) => api.updateTodo(todo), [])
	const deleteTodo = useCallback((todoId: string) => api.deleteTodo(todoId), [])
	const uploadFile = useCallback((todo: Todo, file: File) => {
		api.uploadFile(todo.id, file)
			.then((downloadUrl) => {
				updateTodo({ ...todo, fileLink: downloadUrl })
			})
			.catch((e) => console.error(e))
	}, [])

	const value = useMemo(() => ({ todos, createTodo, updateTodo, deleteTodo, uploadFile }), [todos])

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
