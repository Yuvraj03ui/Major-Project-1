
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-app-adc5b.firebaseapp.com",
  projectId: "interview-app-adc5b",
  storageBucket: "interview-app-adc5b.firebasestorage.app",
  messagingSenderId: "317911378363",
  appId: "1:317911378363:web:570d5b3d6821f3f9ec3c9e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}