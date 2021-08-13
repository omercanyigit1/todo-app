import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBNZdIUQ3B-b-1mx3Rq_UXQUXxg_JdDyqk",
    authDomain: "cooper-todo.firebaseapp.com",
    projectId: "cooper-todo",
    storageBucket: "cooper-todo.appspot.com",
    messagingSenderId: "567719159921",
    appId: "1:567719159921:web:0ac74584398558633f93d0",
    measurementId: "G-7DWRCRQ84X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true, ignoreUndefinedProperties: true });

export default firebase;