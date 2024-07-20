import React, { useState, useEffect } from "react";
import "./signup.css";
import logo from "../../asset/logo.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import signupAPI from "../../api/signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleForm(event) {
    console.log(event);
    event.preventDefault();
    signupAPI(name, email, password, toast, navigate, Cookies);
  }

  useEffect(() => {
    let cookie = Cookies.get("token");
    if (cookie !== undefined) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="signupParent">
      <ToastContainer />
      <img alt="logo" src={logo} />
      <h1 className="montserrat-font">Welcome to dailyblog</h1>
      <h3 className="montserrat-font">Create Account</h3>
      <form onSubmit={handleForm}>
        <div className="inputWrapper jamjuree-font">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleName}
            id="name"
            type="text"
            value={name}
            placeholder="Enter Your Name"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmail}
            id="email"
            type="email"
            value={email}
            placeholder="Enter Your Mail Id"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePassword}
            id="password"
            value={password}
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div className="footerText">
        Already have an account?
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Signup;
