import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function takeToBlogPage() {
    navigate("/blog");
  }

  return (
    <div className="home">
      <div className="content montserrat-font">
        <h1>
          Take Your Life To A <br /> <span>Next</span> Level
        </h1>
        <p>Get Daily Tips by reading dailyblogs</p>
        <button onClick={takeToBlogPage}>Read Here</button>
      </div>
    </div>
  );
}

export default Home;
