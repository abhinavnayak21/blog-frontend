import React, { useState, useEffect } from "react";
import logo from "../../asset/logo.png";
import "./login.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginAPI from "../../api/login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  const navigate = useNavigate();
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleForm(event) {
    console.log(event);
    event.preventDefault();
    loginAPI(email, password, toast, navigate, Cookies);
  }

  useEffect(() => {
    let cookie = Cookies.get("token");
    if (cookie !== undefined) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="signupParent">
      <img alt="logo" src={logo} />
      <ToastContainer />
      <h1 className="montserrat-font">Welcome to dailyblog</h1>
      <h3 className="montserrat-font">Login to Your Account</h3>
      <form onSubmit={handleForm}>
        <div className="inputWrapper jamjuree-font">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmail}
            id="email"
            value={email}
            type="email"
            placeholder="Enter Your Mail Id"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePassword}
            id="password"
            type="password"
            value={password}
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="footerText">
        Didn't have an account?
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
