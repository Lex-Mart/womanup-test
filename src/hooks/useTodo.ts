import { useContext } from 'react'
import { TodoContext } from '../providers'

export const useTodo = () => useContext(TodoContext)
