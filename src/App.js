import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import AddBlog from "./pages/addBlog/AddBlog";
import BlogPage from "./pages/blog/BlogPage";
import Landing from "./pages/landing/Landing";
import Loading from "./pages/loading/Loading";

function App() {
  const [blogsList, setBlogsList] = useState();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const getAllBlogs = () => {
    axios
      .get("https://blogish.herokuapp.com/api/blogs")
      .then((res) => {
        setBlogsList(res.data.blogs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBlogs();
    setSelectedCategory("All");
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{
        blogsList,
        setBlogsList,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/add-blog" exact element={<AddBlog />} />
          <Route path="/:id" exact element={<BlogPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
