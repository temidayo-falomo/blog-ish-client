import React, { useState } from "react";
import { StyledBlogCard } from "./BlogCard.styled";
import { BsArrowRight } from "react-icons/bs";

function BlogCard(props) {
  return (
    <StyledBlogCard>
      <div
        className="image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <span>{props.category}</span>
      <h2>{props.title}</h2>
      <p>{`${props.article.slice(0, 250)}...`}</p>
      <div className="link">
        READ MORE
        <BsArrowRight />
      </div>
    </StyledBlogCard>
  );
}

export default BlogCard;
