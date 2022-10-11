import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="tittle my-2">
        <h2>Developer Test</h2>
      </div>

      <nav className="nav-link">
        <NavLink
          className={({ isActive }) => isActive ? "active" : undefined}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink  className={({ isActive }) => isActive ? "active" : undefined} to={"chart"}>Avarage chart</NavLink>
        <NavLink  className={({ isActive }) => isActive ? "active" : undefined} to={"blogs"}>Blogs</NavLink>
        <NavLink  className={({ isActive }) => isActive ? "active" : undefined} to={"about"}>About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
