import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../../components/blog-card/BlogCard";
import Infobar from "../../components/infobar/Infobar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/right-bar/Rightbar";
import { StyledLanding } from "./Landing.styled";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";

function Landing() {
  const { blogsList, setBlogsList, selectedCategory, setSelectedCategory } =
    useContext(AppContext);

  let navigate = useNavigate();

  const getAllBlogs = () => {
    axios
      .get("https://blogish.herokuapp.com/api/blogs")
      .then((res) => {
        setBlogsList(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNavigate = (param) => {
    navigate(`/blog/${param}`);
  };

  useEffect(() => {
    getAllBlogs();
    setSelectedCategory("All");
  }, []);

  return (
    <StyledLanding>
      <Navbar />
      <Infobar />
      <div className="landing-grid">
        <div className="blog-content">
          {blogsList
            .filter((val) => {
              if (selectedCategory === "All") {
                return val;
              } else if (
                val.category
                  .toLowerCase()
                  .includes(selectedCategory.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(0)
            .reverse()
            .map((data, index, array) => {
              return (
                <div key={data._id} onClick={() => handleNavigate(data._id)}>
                  {!array || array.length === 0 ? (
                    "There Are Currently No Blogs On This Subject"
                  ) : (
                    <BlogCard {...data} />
                  )}
                </div>
              );
            })}
        </div>
        {/* <Rightbar /> */}
      </div>
    </StyledLanding>
  );
}

export default Landing;
