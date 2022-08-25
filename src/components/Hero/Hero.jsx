import React from "react";
import reactlarge from "../../images/react-icon-large.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="fun-heading">
        <h1>Fun facts about React</h1>
      </div>
      <div className="facts-list">
        <ul className="list">
          <li className="list-items">Was first released in 2013</li>
          <li className="list-items">Was originally created by Jordan Walke</li>
          <li className="list-items">Has well over 100K stars on GitHub</li>
          <li className="list-items">Is maintained by Facebook</li>
          <li className="list-items">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img src={reactlarge} alt="" className="half-react" />
      </div>
    </div>
  );
}

export default Hero;
