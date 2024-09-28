import React from "react";
import Header from "./Header";
import { validation } from "../utils/validate";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const loginCheckHandler = () => {
    setIsLogin(!isLogin);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const validationResult = validation(
      email.current.value,
      password.current.value
    );
    setError(validationResult);
    if (validationResult) return;
    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
          // ..
        });

      // sign up logic
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
          alt="background"
        />
      </div>

      <form className="bg-black absolute w-3/12 my-64 mx-auto left-0 right-0 text-white px-5 rounded-xl bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-4  w-full my-5 bg-gray-900  rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Enter email address"
          className="p-4  w-full my-5 bg-gray-900  rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-4 my-5 w-full bg-gray-900  rounded-lg"
        />
        <p className="text-red-700">{error}</p>
        <button
          className=" p-4 my-5 bg-red-700 w-full  rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isLogin ? " Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 my-5 mb-14 cursor-pointer"
          onClick={loginCheckHandler}
        >
          {isLogin
            ? "New to Netflix ? Sign Up Now"
            : "Already Member Please Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
