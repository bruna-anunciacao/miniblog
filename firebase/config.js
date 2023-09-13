import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlgLneLcdV0mcVajSb5shQM9bCwxEgc8w",
  authDomain: "miniblog-ad4f5.firebaseapp.com",
  projectId: "miniblog-ad4f5",
  storageBucket: "miniblog-ad4f5.appspot.com",
  messagingSenderId: "724974726701",
  appId: "1:724974726701:web:481c3d0392f4fdbd6e52a4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };