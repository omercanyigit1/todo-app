import firebase from 'firebase';

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
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = auth.signInAnonymously();

export {auth, provider};