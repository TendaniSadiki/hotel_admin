import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
const config = {
    // apiKey: "AIzaSyB8CB9NLa1vbsREct9x7r2QWNzl0fXx3YA",
    // authDomain: "apparelbase-76671.firebaseapp.com",
    // projectId: "apparelbase-76671",
    // storageBucket: "apparelbase-76671.appspot.com",
    // messagingSenderId: "101281494605",
    // appId: "1:101281494605:web:acb62d132a8456585d8e04",
    // measurementId: "G-S25VVVM4TB"
    apiKey: "AIzaSyAHC_tFwSv-nEdOmP8UawhFz8PqD8M_hpA",
    authDomain: "hotelapp-ead6b.firebaseapp.com",
    databaseURL: "https://hotelapp-ead6b-default-rtdb.firebaseio.com",
    projectId: "hotelapp-ead6b",
    storageBucket: "hotelapp-ead6b.appspot.com",
    messagingSenderId: "458163058897",
    appId: "1:458163058897:web:ef3209eef263c677836df0"
};


const fire = firebase.initializeApp(config);
export const storage  = fire.storage();
export const db = fire.firestore();
export const auth = fire.auth()

export default fire;