import { initializeApp } from "firebase/app";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyB6QymTqXVfbmZ57BWZXY9BdfdZIYlIokE",

  authDomain: "motopep-plus.firebaseapp.com",

  projectId: "motopep-plus",

  storageBucket: "motopep-plus.firebasestorage.app",

  messagingSenderId:  "368718825684",

  appId:  "1:368718825684:web:25f2f7688976871068d341"

};

export const app =
  initializeApp(firebaseConfig);

export const db = getFirestore(app);