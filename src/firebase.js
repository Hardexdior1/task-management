import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqhqkYjLz1Y7F98c8qYOJ0tLQ9Onc09RM",
    authDomain: "task-management-app-2b61a.firebaseapp.com",
    projectId: "task-management-app-2b61a",
    storageBucket: "task-management-app-2b61a.appspot.com",
    messagingSenderId: "339701583493",
    appId: "1:339701583493:web:bdd13d60162474e50be3ec",
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };






