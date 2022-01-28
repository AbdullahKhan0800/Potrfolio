import React from "react";
import { Wave } from "react-animated-text";
import { NavLink } from "react-router-dom";
import "../components/components.css";
const Home = () => {
  return (
    <div>
      <main className="main-img sm:text-xs">
        <div className="wave sm:text-xs text-justify">
          <NavLink to={"/posts"}>
            <Wave text="Hello, Welcome To My Portfolio" />
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Home;
