import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyA3mByz2_H_apzkP4qBDpzWjQj0R1Je8EA',
	authDomain: 'front-test-4d257.firebaseapp.com',
	databaseURL: 'https://front-test-4d257-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'front-test-4d257',
	storageBucket: 'front-test-4d257.appspot.com',
	messagingSenderId: '39003202723',
	appId: '1:39003202723:web:b18166b55e37d7c0f60b16',
	measurementId: 'G-KPYC82ZKSR',
}
const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
export const storage = getStorage(app)
