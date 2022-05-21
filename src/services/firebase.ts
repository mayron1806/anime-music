import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGdrEaYgsdnqHNbKAjy2kpwgpe2r-Jqrc",
  authDomain: "anime-music-738a0.firebaseapp.com",
  projectId: "anime-music-738a0",
  storageBucket: "anime-music-738a0.appspot.com",
  messagingSenderId: "55747968120",
  appId: "1:55747968120:web:d394144e86dc882314c18d"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const firestore = getFirestore(app);