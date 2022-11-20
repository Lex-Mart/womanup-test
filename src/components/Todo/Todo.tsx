import { AddTodo } from '../AddTodo/AddTodo'
import { TodoList } from '../TodoList/TodoList'

import './Todo.scss'

export const Todo = () => {
	return (
		<main className="Todo">
			<AddTodo />
			<TodoList />
		</main>
	)
}
