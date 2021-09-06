import firebase from 'firebase';
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCaAGVkuD1Hh-1dRjvYJ8trQnkRVTPcp6Y",
        authDomain: "clonn-amzon.firebaseapp.com",
        projectId: "clonn-amzon",
        storageBucket: "clonn-amzon.appspot.com",
        messagingSenderId: "655450795282",
        appId: "1:655450795282:web:b1bb688523a1f5bf6097cb",
        measurementId: "G-RTNES00MXY"

    }
)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};