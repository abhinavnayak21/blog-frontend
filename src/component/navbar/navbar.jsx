import React, { useState, useEffect, Fragment } from "react";
import logo from "../../asset/logo.png";
import Cookies from "js-cookie";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openHeader, setOpenHeader] = useState(false);
  const [currentUserId, setcurrentUserId] = useState("");

  function openTray() {
    setOpenHeader(true);
  }
  function closeTray() {
    setOpenHeader(false);
  }

  useEffect(() => {
    const token = Cookies.get("token");
    const userid = Cookies.get("userid");
    if (token !== undefined) {
      setIsLoggedIn(true);
      setcurrentUserId(userid);
    }
  }, []);

  return (
    <div className="navbarParent">
      <div className="navbar">
        <img alt="logo" src={logo} />
        <ul className="jamjuree-font">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          {isLoggedIn === true ? (
            <li>
              <a href={`/profile/${currentUserId}`}>Profile</a>
            </li>
          ) : (
            <Fragment>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </Fragment>
          )}
        </ul>

        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>

        {openHeader === false ? (
          <div className="menu">
            <FontAwesomeIcon icon={faBars} onClick={openTray} />
          </div>
        ) : (
          <div className="menu">
            <FontAwesomeIcon icon={faClose} onClick={closeTray} />
          </div>
        )}
      </div>

      <div className={`tray  ${openHeader === true ? "viewTray" : ""}`}>
        <ul className="mobileList jamjuree-font">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          {isLoggedIn === true ? (
            <li>
              <a href="/">Profile</a>
            </li>
          ) : (
            <Fragment>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </Fragment>
          )}
        </ul>

        <ul className="mobileList">
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
