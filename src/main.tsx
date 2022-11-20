import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.scss'
import { TodoProvider } from './providers'

const app = (
	<React.StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(app)
