import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDInhtmVknYqfQgEK1YehLH8ZzJo_DBLyc",
  authDomain: "new-project-bc218.firebaseapp.com",
  projectId: "new-project-bc218",
  storageBucket: "new-project-bc218.appspot.com",
  messagingSenderId: "332752081910",
  appId: "1:332752081910:web:c21d37070fd35fd6322dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};