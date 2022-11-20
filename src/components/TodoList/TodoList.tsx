import { useTodo } from '../../hooks/useTodo'
import { TodoItem } from '../TodoItem'

import './TodoList.scss'

export const TodoList = () => {
	const { todos, deleteTodo, updateTodo, uploadFile } = useTodo()

	if (todos.length === 0) {
		return (
			<div className="TodoList">
				<h2 className="title placeHolder">создайте задачу</h2>
			</div>
		)
	}

	return (
		<div className="TodoList">
			<h2 className="title">задачи</h2>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					delteTodo={() => deleteTodo(todo.id)}
					updateTodo={(updatedTodo) => updateTodo(updatedTodo)}
					uploadFile={(file) => uploadFile(todo, file)}
				/>
			))}
		</div>
	)
}
