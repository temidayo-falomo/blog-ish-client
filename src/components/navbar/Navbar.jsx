import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <Link className="logo" to="/">
        <img src="./assets/logo.svg" alt="" />
      </Link>

      <div className="company-name col center">
        <h1> BLOGISH</h1>
        <div className="row">
          <span>April 25 2023</span>
        </div>
      </div>

      <Link to="/add-blog">
        <button>Add Blog</button>
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
