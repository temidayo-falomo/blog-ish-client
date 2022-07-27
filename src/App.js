import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import AddBlog from "./pages/addBlog/AddBlog";
import BlogPage from "./pages/blog/BlogPage";
import Landing from "./pages/landing/Landing";

function App() {
  const [blogsList, setBlogsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
          <Route path="/blog/:id" exact element={<BlogPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
