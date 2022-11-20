import { generateId } from '../lib'

const KEY = 'frontend_test'

let userId = localStorage.getItem(KEY)
export const getUserId = () => {
	if (!userId) {
		userId = generateId()
		localStorage.setItem(KEY, userId)
	}

	return userId
}
