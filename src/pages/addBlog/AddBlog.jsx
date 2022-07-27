import React from "react";
import BlogForm from "../../components/blog-form/BlogForm";
import Navbar from "../../components/navbar/Navbar";
import { StyledAddBlog } from "./AddBlog.styled";

function AddBlog() {
  return (
    <StyledAddBlog >
      <Navbar />
      <div className="row rw">
        <BlogForm />
      </div>
    </StyledAddBlog>
  );
}

export default AddBlog;
