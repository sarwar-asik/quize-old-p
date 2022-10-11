import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
        <div className="tittle">
            <h2>Developer Test</h2>
        </div>

      <div className="Link">
        <Link to={"/"}>Home</Link>
        <Link to={"chart"}>Avarage chart</Link>
        <Link to={"blogs"}>Blogs</Link>
        <Link to={"about"}>About</Link>
      </div>
    </div>
  );
};

export default Header;
