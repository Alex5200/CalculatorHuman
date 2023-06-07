const firebase = require("firebase/app");
const db = require("firebase/database")

const compat = require("firebase/database");

export const FirebaseConfig = {
    apiKey: "AIzaSyDf6mKI1cM9bfKuCBCW4UYOgnIzd9x4cAE",
    authDomain: "testserver-9e1a8.firebaseapp.com",
    databaseURL:
        "https://testserver-9e1a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testserver-9e1a8",
    storageBucket: "testserver-9e1a8.appspot.com",
    messagingSenderId: "416661031885",
    appId: "1:416661031885:web:ce40714f64af6998f19284",
    measurementId: "G-X8M9X81Z1Q"
};

const App = firebase.initializeApp(FirebaseConfig);

export  {App}
