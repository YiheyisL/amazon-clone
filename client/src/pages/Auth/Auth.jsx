import React, { useState, useContext } from "react";
import classes from "./signUp.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //   console.log(email, password);
  return (
    <div>
      <section className={classes.login}>
        {/* logo */}
        <Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt=""
          />
        </Link>

        {/* form */}
        <div className={classes.login_container}>
          <h1>Sign In</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              name="signin"
              onClick={authHandler}
              className={classes.login__signInButton}
            >
              Sign In
            </button>
          </form>
          {/* agrment  */}
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE condition of use &
            sale. please see our Privacy notice. Our Cookies Nootice and our
            Interet-Based Ads Notice
          </p>
          {/* create accoun button */}
          <button
            type="submit"
            name="signup"
            onClick={authHandler}
            className={classes.login__registerButton}
          >
            Create Your Amazon Account
          </button>
        </div>
      </section>
    </div>
  );
}

export default Auth;
