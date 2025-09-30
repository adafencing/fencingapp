import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY="AIzaSyBsaHlzvgyuZexRtcqguZTAdcm5GQhP6M0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN="fencing-app-5cd93.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID="fencing-app-5cd93",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET="fencing-app-5cd93.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID="381698376899",
  appId: import.meta.env.VITE_FIREBASE_APP_ID="1:381698376899:web:43e0b8cc9ac81ab5380e76",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Persist login after tab/browser reload
setPersistence(auth, browserLocalPersistence).catch((e) => {
  console.error("Auth persistence error:", e);
});

// 👇 export Firestore
export const db = getFirestore(app);