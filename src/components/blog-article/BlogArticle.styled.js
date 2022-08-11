import styled from "styled-components";

export const StyledBlogArticle = styled.article`
  display: flex;
  width: 90%;
  margin: 2rem auto;
  gap: 4rem;
  min-height: 70vh;
  flex-wrap: wrap;

  .blog-image {
    width: 500px;
    overflow: hidden;
    border-radius: 5px;
  }

  .full-text {
    width: 50%;
    min-width: 300px;
    font-family: 'Bona Nova', sans-serif;
    gap: 1rem;
  }

  .full-text p {
    line-height: 35px;
  }
`;
