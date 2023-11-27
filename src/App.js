import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
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
import WeightPlatesReview from "./components/reviews/WeightPlatesReview";
import WorkoutGlovesReview from "./components/reviews/WorkoutGlovesReview";
import ExerciseRollerReview from "./components/reviews/ExerciseRollerReview";
import LoginHome from "./components/after_login/LoginHome";
import Checkout from "./components/Checkout";
import AfterCheckoutTransfer from "./components/AfterCheckoutTransfer";
import AfterRegisterTransfer from "./components/AfterRegisterTransfer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
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
        <Route path="/login-home" element={<LoginHome />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/after-checkout-transfer"
          element={<AfterCheckoutTransfer />}
        />
        <Route path="/weight-plates-review" element={<WeightPlatesReview />} />
        <Route
          path="/workout-gloves-review"
          element={<WorkoutGlovesReview />}
        />
        <Route
          path="/exercise-roller-review"
          element={<ExerciseRollerReview />}
        />
        <Route
          path="/after-register-transfer"
          element={<AfterRegisterTransfer />}
        />
      </Routes>
    </div>
  );
}

export default App;
