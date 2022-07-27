import styled from "styled-components";

export const StyledBlogArticle = styled.article`
  display: flex;
  width: 90%;
  margin: 2rem auto;
  gap: 4rem;
  min-height: 70vh;

  .blog-image {
    width: 600px;
    overflow: hidden;
    border-radius: 5px;
  }

  .full-text {
    width: 70%;
    font-family: 'Bona Nova', sans-serif;
    gap: 1rem;
  }

  .full-text p {
    line-height: 35px;
  }
`;
