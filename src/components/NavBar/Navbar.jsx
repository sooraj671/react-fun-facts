import React from "react";
import logo from "../../images/react-icon-small.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav">

        <img src={logo} className="nav--icon" />
        <h5 className="nav--logo_text">ReactFacts</h5>


        <h4 className="nav--title">React Course - Project 1</h4>

    </div>
  );
}
