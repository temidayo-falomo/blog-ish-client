import styled from "styled-components";

export const StyledBlogCard = styled.div`
  max-width: 400px;
  height: 600px;
  border: 1px var(--color-border) solid;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: 1s ease;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .image {
    min-width: 100%;
    height: 300px;
    background-color: royalblue;
    border-radius: 5px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .link {
    color: black;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-family: "poppins";
    font-weight: 500;

    :hover {
      color: royalblue;
    }
  }

  span {
    font-size: 0.8rem;
    font-family: "poppins", sans-serif;
  }

  p {
    font-size: 1.1rem;
  }
`;
