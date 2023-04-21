import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyARuewjpuDwZOPYspTRofdh9OWS6ESRvvM",
  authDomain: "webshopreactdb.firebaseapp.com",
  projectId: "webshopreactdb",
  storageBucket: "webshopreactdb.appspot.com",
  messagingSenderId: "970480440947",
  appId: "1:970480440947:web:6b0de17e7aee1e9a317c06",
  measurementId: "G-V4C7XJNHH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firebaseApp = app;
