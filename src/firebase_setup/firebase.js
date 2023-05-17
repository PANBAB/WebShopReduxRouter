import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
const firebase = require("./firebase");
require("firebase/firestore");

export const auth = getAuth();
export const firebaseApp = app;
