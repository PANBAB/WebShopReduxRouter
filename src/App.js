import "./App.css";
import React from "react";
import ResponsiveAppBar from "./AppBar";
import { Route, Routes } from "react-router-dom";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { useRef } from "react";
// import handleSubmit from "./handles";

import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Basket from "./components/Basket";
import ExerciseBikeReview from "./components/reviews/ExerciseBikeReview";
import DumbellSetReview from "./components/reviews/DumbellSetReview";
import YogaMatReview from "./components/reviews/YogaMatReview";
import RowingMachineReview from "./components/reviews/RowingMachineReview";
import SmartWatchReview from "./components/reviews/SmartWatchReview";
import ChalkReview from "./components/reviews/ChalkReview";
import JumpRopeReview from "./components/reviews/JumpRopeReview";
import BoxingGlovesReview from "./components/reviews/BoxingGlovesReview";
import MedicineBallReview from "./components/reviews/MedicineBallReview";

// firebase.initializeApp({
//   apiKey: "AIzaSyARuewjpuDwZOPYspTRofdh9OWS6ESRvvM",
//   authDomain: "webshopreactdb.firebaseapp.com",
//   projectId: "webshopreactdb",
//   storageBucket: "webshopreactdb.appspot.com",
//   messagingSenderId: "970480440947",
//   appId: "1:970480440947:web:6b0de17e7aee1e9a317c06",
//   measurementId: "G-V4C7XJNHH3",
// });

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/exercise-bike-review" element={<ExerciseBikeReview />} />
        <Route path="/dumbell-set-review" element={<DumbellSetReview />} />
        <Route path="/yoga-mat-review" element={<YogaMatReview />} />
        <Route
          path="/rowing-machine-review"
          element={<RowingMachineReview />}
        />
        <Route path="/smart-watch-review" element={<SmartWatchReview />} />
        <Route path="/chalk-review" element={<ChalkReview />} />
        <Route path="/jump-rope-review" element={<JumpRopeReview />} />
        <Route path="/boxing-gloves-review" element={<BoxingGlovesReview />} />
        <Route path="/medicine-ball-review" element={<MedicineBallReview />} />
      </Routes>
    </div>
  );
}

export default App;
