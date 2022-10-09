import React, { useContext } from "react";
import BlogCard from "../../components/blog-card/BlogCard";
import Infobar from "../../components/infobar/Infobar";
import Navbar from "../../components/navbar/Navbar";
import { StyledLanding } from "./Landing.styled";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";

function Landing() {
  const { blogsList, selectedCategory } = useContext(AppContext);

  let navigate = useNavigate();

  const handleNavigate = (param) => {
    navigate(`/${param}`);
  };

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
            .map((data) => {
              return (
                <div key={data._id} onClick={() => handleNavigate(data._id)}>
                  <BlogCard {...data} />
                </div>
              );
            })}

          {blogsList.filter((val) => {
            if (selectedCategory === "All") {
              return val;
            } else if (
              val.category
                .toLowerCase()
                .includes(selectedCategory.toLowerCase())
            ) {
              return val;
            }
          }).length === 0 && (
            <p style={{ margin: "auto" }}>Currently no Blogs on this Subject</p>
          )}
        </div>
      </div>
    </StyledLanding>
  );
}

export default Landing;
