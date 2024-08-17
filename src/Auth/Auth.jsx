import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore, initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDr44zrtjJCYGFfl1bCvApTXUVrxcehW-o",
  authDomain: "security-10a31.firebaseapp.com",
  projectId: "security-10a31",
  storageBucket: "security-10a31.appspot.com",
  messagingSenderId: "403685731405",
  appId: "1:403685731405:web:03be363536b20f4a2a0004",
  measurementId: "G-RDBPGR3TBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const AppData = getAuth(app);

export const store = getFirestore(app);

