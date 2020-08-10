import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBpzM0EUvkuRQ1mzCXItNnYD2OHdfC1QxM',
	authDomain: 'twitter-clone-90ede.firebaseapp.com',
	databaseURL: 'https://twitter-clone-90ede.firebaseio.com',
	projectId: 'twitter-clone-90ede',
	storageBucket: 'twitter-clone-90ede.appspot.com',
	messagingSenderId: '976292333152',
	appId: '1:976292333152:web:d5afc186bc4f35f31ae505',
	measurementId: 'G-SRQGKL3W8T'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
