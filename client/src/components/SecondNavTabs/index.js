import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
// import "./style.css"

function SecondNavTabs() {
  return (
  
      <nav className="navbar sticky navbar-light sticky--top js-header">
 
     
        <Link
          to="/statistics"
          className={window.location.pathname === "/statistics" ? "nav-link active" : "nav-link"}
        >
          Statistics
        </Link>
    
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
         <img src={logo} alt="logo"/>
        </Link>
        <Link
          to="/contact/learn"
          className="nav-item"
        >
          Learn
        </Link>
      </nav>

  );
}

export default SecondNavTabs;
