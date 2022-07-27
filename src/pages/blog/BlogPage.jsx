import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogArticle from "../../components/blog-article/BlogArticle";
import Navbar from "../../components/navbar/Navbar";
import { StyledBlogPage } from "./BlogPage.styled";
import { useParams } from "react-router-dom";

function BlogPage() {
  const id = useParams().id;
  const [blogObject, setBlogObject] = useState({});

  const getBlog = async () => {
    axios
      .get(`https://blogish.herokuapp.com/api/blogs/${id}`)
      .then((res) => setBlogObject(res.data.blog))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBlog();
  }, []);

  console.log(blogObject);

  return (
    <StyledBlogPage>
      <Navbar />
      <BlogArticle blogObject={blogObject} />
    </StyledBlogPage>
  );
}

export default BlogPage;
