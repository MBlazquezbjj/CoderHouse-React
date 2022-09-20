import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEbRa8XIVioV-laJoUw6JvFJoMHXIOnSY",
    authDomain: "e-watch-26498.firebaseapp.com",
    projectId: "e-watch-26498",
    storageBucket: "e-watch-26498.appspot.com",
    messagingSenderId: "394114267850",
    appId: "1:394114267850:web:f54a640aceb69020701233"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;