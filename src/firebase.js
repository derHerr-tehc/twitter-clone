// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACCVgP2qs4-_2r-W2ch7R9KqWcGkXsXZE",
    authDomain: "twitter-clone-a264d.firebaseapp.com",
    databaseURL: "https://twitter-clone-a264d.firebaseio.com",
    projectId: "twitter-clone-a264d",
    storageBucket: "twitter-clone-a264d.appspot.com",
    messagingSenderId: "855295709601",
    appId: "1:855295709601:web:43f195ecd27ebba5dd7be0",
    measurementId: "G-Z5T4RYY9Z5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;