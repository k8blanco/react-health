import React from "react";
import { Link } from "react-router-dom";
// import "./style.css"

function NavTabs() {
  return (
  
      <nav className="navbar sticky navbar-light sticky--top js-header">
 
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <Link
          to="/editorspage"
          className={window.location.pathname === "/editorspage" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </nav>

  );
}

export default NavTabs;
