import { ref, child, push, set, onValue, remove } from 'firebase/database'
import { uploadBytesResumable, ref as storageRef, getDownloadURL } from 'firebase/storage'

import { db, storage } from './firebase'
import { getUserId } from './user'
import { Todo } from '../interfaces'

const userId = getUserId()
const childerRef = (path = '') => child(ref(db), `${userId}${path}`)

export const api = {
	subscribeTodosUpdate: (cb: (todos: Todo[]) => void) => {
		const unsubscribe = onValue(childerRef(), (snapshot) => {
			if (!snapshot.exists()) {
				cb([])
				return
			}

			const todos = Object.entries(snapshot.val())
				.map(([id, data]) => {
					const d = data as Omit<Todo, 'id'>
					return { id, ...d }
				})
				.reverse()
			cb(todos)
		})
		return unsubscribe
	},
	createTodo: (title: string) => {
		push(childerRef(), {
			title,
			description: '',
			completed: false,
			expireTime: '',
			fileLink: '',
		})
	},
	updateTodo: ({ id, ...todo }: Todo) => {
		set(ref(db, `${userId}/${id}`), todo)
	},
	deleteTodo: (todoId: string) => {
		remove(childerRef(`/${todoId}`))
	},
	uploadFile: (todoId: string, file: File): Promise<string> => {
		const storRef = storageRef(storage, `${todoId}/${file.name}`)
		const uploadTask = uploadBytesResumable(storRef, file)

		return new Promise((res, rej) => {
			uploadTask.on(
				'state_changed',
				null,
				(err) => rej(err),
				async () => {
					const url = await getDownloadURL(uploadTask.snapshot.ref)
					res(url)
				},
			)
		})
	},
}
