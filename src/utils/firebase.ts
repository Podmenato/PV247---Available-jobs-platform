import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User,
	updateEmail,
	updatePassword
} from 'firebase/auth';
import {
	addDoc,
	collection,
	CollectionReference,
	doc,
	DocumentReference,
	getDoc,
	getFirestore,
	setDoc
} from 'firebase/firestore';
import { onSnapshot } from '@firebase/firestore';

import { ISearchParams } from 'interfaces/ISearchParams';

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

const db = getFirestore();

export type Favorite = {
	user: string;
	offer: number;
};

export const favoritesCollection = collection(
	db,
	'favorites'
) as CollectionReference<Favorite>;

export const favoritesDocument = (id: string) =>
	doc(db, 'favorites', id) as DocumentReference<Favorite>;

// Settings collection
export type SettingsType = {
	firstName?: string;
	lastName?: string;
	education?: string;
};

export const settingsCollection = collection(
	db,
	'settings'
) as CollectionReference<SettingsType>;

export const settingsDocument = (id: string) =>
	doc(db, 'settings', id) as DocumentReference<SettingsType>;

export const changeMail = (mail: string) => {
	if (auth.currentUser) {
		updateEmail(auth.currentUser, mail)
			.then(() => {
				// Email updated!
				// ...
			})
			.catch(() => {
				// An error occurred
				// ...
			});
	}
};

export const changePsswd = (newPassword: string) => {
	if (auth.currentUser) {
		updatePassword(auth.currentUser, newPassword)
			.then(() => {
				// Update successful.
			})
			.catch(() => {
				// An error ocurred
				// ...
			});
	}
};

// FilterSettings collection
export type FilterSettingsType = {
	workRelationship?: string;
	suitableFor?: string;
	salary?: number;
	startingFrom?: string;
	profession?: string;
	city?: string;
};

export const filterSettingsCollection = collection(
	db,
	'filterSettings'
) as CollectionReference<FilterSettingsType>;

export const filterSettingsDocument = (id: string) =>
	doc(db, 'filterSettings', id) as DocumentReference<FilterSettingsType>;

//My Filter collection

export const myFilterCollection = collection(
	db,
	'my-filter'
) as CollectionReference<ISearchParams>;

export const myFilterDocument = () =>
	doc(db, 'my-filter') as DocumentReference<ISearchParams>;

export const setFilter = async (params: ISearchParams) => {
	setDoc(doc(db, 'my-filter', 'ID'), params);
};
