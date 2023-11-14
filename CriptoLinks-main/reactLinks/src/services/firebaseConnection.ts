import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth }  from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC6NJ4qG_oNW9mSqvb_5wrqHXa1sU90s64",
  authDomain: "criptolinks-9718d.firebaseapp.com",
  projectId: "criptolinks-9718d",
  storageBucket: "criptolinks-9718d.appspot.com",
  messagingSenderId: "1001611016519",
  appId: "1:1001611016519:web:5d36006f673008d913b462"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};