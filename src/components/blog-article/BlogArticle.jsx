import React from "react";
import { StyledBlogArticle } from "./BlogArticle.styled";

function BlogArticle(props) {
  return (
    <StyledBlogArticle>
      <div className="blog-image">
        <img src={props.blogObject.image} alt="" />
      </div>
      <div className="full-text col">
        <h2>{props.blogObject.title}</h2>
        <span>By @{props.blogObject.name}</span>
        <p>{props.blogObject.article}</p>
      </div>
    </StyledBlogArticle>
  );
}

export default BlogArticle;
