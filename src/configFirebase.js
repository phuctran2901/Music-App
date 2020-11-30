import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fire = {
    apiKey: "AIzaSyCGVBrQL0JASeREFYX0PHFbsgHo70YBZr0",
    authDomain: "music-app-8aad0.firebaseapp.com",
    databaseURL: "https://music-app-8aad0.firebaseio.com",
    projectId: "music-app-8aad0",
    storageBucket: "music-app-8aad0.appspot.com",
    messagingSenderId: "555655083886",
    appId: "1:555655083886:web:1a2323f561d76f292c737f",
    measurementId: "G-N9HWNZERJ1"
};
firebase.initializeApp(fire);
const storage = firebase.storage();
const database = firebase.database();

export { storage, database, fire as default };
