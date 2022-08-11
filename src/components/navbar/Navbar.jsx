import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <a className="logo" href="https://blogish.herokuapp.com/api/blogs">
        <button className="view-api">View API</button>
      </a>

      <Link to="/" className="company-name col center">
        <h1>BLOGISH</h1>
      </Link>

      <Link to="/add-blog">
        <button className="add-blog-btn">Add Blog</button>
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
