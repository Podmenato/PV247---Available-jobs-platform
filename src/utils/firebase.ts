import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User
} from 'firebase/auth';

initializeApp({
	apiKey: 'AIzaSyDK4yzJg5XUbi-RfIM4KiZbZKO1Y61UprA',
	authDomain: 'available-jobs-platform.firebaseapp.com',
	projectId: 'available-jobs-platform',
	storageBucket: 'available-jobs-platform.appspot.com',
	messagingSenderId: '241652078832',
	appId: '1:241652078832:web:7667c2b765613d857c8a35'
});

const auth = getAuth();

export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const signOut = () => authSignOut(auth);

export const onAuthChanged = (callback: (user: User | null) => void) =>
	onAuthStateChanged(auth, callback);
