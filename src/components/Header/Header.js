import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div classNameName="header-container">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid ">
          <div classNameName="me-5">
            <h2>Developer Test</h2>
          </div>

          <div className="">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse mt-3" id="navbarNavDropdown">
              <div className="navbar-nav">
                <p className="nav-item">
                  <NavLink
                    classNameName={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </p>
                <p className="nav-item">
                  <NavLink
                    classNameName={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    to={"chart"}
                  >
                    Avarage chart
                  </NavLink>
                </p>
                <p className="nav-item">
                  <NavLink
                    classNameName={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    to={"blogs"}
                  >
                    Blogs
                  </NavLink>
                </p>
                <p className="nav-item">
                  <NavLink
                    classNameName={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    to={"about"}
                  >
                    About
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
