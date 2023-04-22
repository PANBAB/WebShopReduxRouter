import React, { useEffect, useState } from "react";
import { auth } from "../../src/firebase_setup/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice.jsx";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const auth1 = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        dispatch(login());
        console.log(auth1);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div>
      {authUser ? <p>Signed In as {authUser.email}</p> : <p>You Signed Out</p>}
    </div>
  );
};

export default AuthDetails;
