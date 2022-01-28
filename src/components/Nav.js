import React from "react";
import { NavLink } from "react-router-dom";
import "../components/components.css";
const Nav = () => {
  return (
    <>
      <header className="nav-main sm:text-xs">
        <div className="nav-div">
          <nav className="nav">
            <NavLink to={"/"} exact className="logo">
              &lt;<span>AbdullahKhan/</span>&gt;
            </NavLink>
            <NavLink className="nth-child" to={"/about"}>
              About Me
            </NavLink>
            <NavLink className="nth-child" to={"/projects"}>
              Projects
            </NavLink>
            <NavLink className="nth-child" to={"/posts"}>
              Posts
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
