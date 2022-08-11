import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogArticle from "../../components/blog-article/BlogArticle";
import Navbar from "../../components/navbar/Navbar";
import { StyledBlogPage } from "./BlogPage.styled";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";

function BlogPage() {
  const id = useParams().id;
  const [blogObject, setBlogObject] = useState({});
  const [loading, setLoading] = useState(true);

  const getBlog = async () => {
    axios
      .get(`https://blogish.herokuapp.com/api/blogs/${id}`)
      .then((res) => {
        setBlogObject(res.data.blog);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledBlogPage>
      <Navbar />
      <BlogArticle blogObject={blogObject} />
    </StyledBlogPage>
  );
}

export default BlogPage;
