import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>All countries</h1>
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/countries">Countries</a>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Header;
