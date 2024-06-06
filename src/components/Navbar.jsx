import React from "react";
import "./navbar.css"

const Navbar = ({ button, onClick }) => {
  return (
    <>
      <nav className="nav-bar">
        <button className="primary" onClick={() => onClick()}>{button}</button>
      </nav>
    </>
  );
};

export default Navbar;
