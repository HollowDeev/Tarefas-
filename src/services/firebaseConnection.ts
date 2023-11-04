import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKCbZCFA-ZuIDah2QVkv9STK89o_kTYPw",
  authDomain: "tarefaplus-404114.firebaseapp.com",
  projectId: "tarefaplus-404114",
  storageBucket: "tarefaplus-404114.appspot.com",
  messagingSenderId: "643135998256",
  appId: "1:643135998256:web:e594a0e286f93449fc20f5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }