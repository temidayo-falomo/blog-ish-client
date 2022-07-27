import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../categories-data/CategoriesData";
import { StyledBlogForm } from "./BlogForm.styled";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";

function BlogForm() {
  const [loremText, setLoremText] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const [imageLoading, setImageLoading] = useState(false);

  const [category, setCategory] = useState("General");

  const navigate = useNavigate("/");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mongoData = {
      title: postTitle,
      image: selectedImage,
      name: authorName,
      article: loremText,
      category: category,
    };

    await axios
      .post("https://blogish.herokuapp.com/api/blogs/add-blog", mongoData)
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  const getRandomText = () => {
    axios
      .get(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text"
      )
      .then((res) => setLoremText(res.data))
      .catch((err) => console.log(err));
  };

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "dayo1234");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/temidayo-falomo/image/upload",
        formData
      )
      .then((res) => {
        setImageLoading(true);
        setSelectedImage(res.data.url);
      })
      .then(setImageLoading(false))
      .catch();
  };

  console.log(category);

  return (
    <StyledBlogForm onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Post Title"
        onChange={(e) => setPostTitle(e.target.value)}
        required
      />

      <input
        type="name"
        placeholder="Author Name"
        onChange={(e) => setAuthorName(e.target.value)}
        required
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        {categoriesData.map((data, index) => {
          return <option key={index}>{data}</option>;
        })}
      </select>

      <div className="image-input row">
        <input
          type="file"
          onChange={(e) => uploadImage(e.target.files)}
          required
        />
        {imageLoading ? (
          <BsImageFill className="circle" />
        ) : (
          <MdOutlineImageNotSupported className="circle red" />
        )}
      </div>

      <div className="textarea col">
        <div>
          <span className="generate" onClick={getRandomText}>
            Generate Random Text?
          </span>
        </div>

        <textarea
          placeholder="Write Post"
          value={loremText}
          onChange={(e) => setLoremText(e.target.value)}
        ></textarea>
      </div>

      {imageLoading ? (
        <button>Post</button>
      ) : (
        <button disabled className="disabled">
          Post
        </button>
      )}
    </StyledBlogForm>
  );
}

export default BlogForm;
