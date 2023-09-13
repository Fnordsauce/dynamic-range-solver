import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// BUG: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY52Vh4vdOcUsYEf49OXB_GMch33Xy2AA",
  authDomain: "dyraso-79d52.firebaseapp.com",
  projectId: "dyraso-79d52",
  storageBucket: "dyraso-79d52.appspot.com",
  messagingSenderId: "209237765069",
  appId: "1:209237765069:web:12786b546644a9db48f284",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { app, auth, db, provider };
