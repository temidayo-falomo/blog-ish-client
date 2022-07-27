import styled from "styled-components";

export const StyledBlogForm = styled.form`
  min-height: 720px;
  width: 680px;
  min-width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: center;
  border-radius: 20px;
  margin-bottom: 4rem;

  h2 {
    text-align: center;
  }

  input,
  select {
    padding: 20px;
    border: 1px var(--color-border) solid;
    border-radius: 5px;
    text-transform: capitalize;
  }

  button {
    padding: 12px;
    min-width: 120px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: green;
    color: #fff;
    font-size: .9rem;
    font-family: 'poppins';
  }

  textarea {
    width: 100%;
    height: 300px !important;
    padding: 20px;
    border: 1px var(--color-border) solid;
    border-radius: 5px;
    text-transform: capitalize;
  }

  .textarea {
    gap: 0.5rem;
  }

  .textarea div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .generate {
    padding: 5px;
    align-self: flex-end;
    justify-self: flex-end;
    margin: 0;
    background-color: aliceblue;
    font-size: 0.8rem;
    font-family: "poppins", sans-serif;
    cursor: pointer;
  }

  .disabled {
    cursor: initial;
    background-color: gray;
    cursor: not-allowed;
  }

  .image-input {
    border: 1px var(--color-border) solid;
    position: relative;
  }

  .image-input .circle {
    color: green;
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 2rem;
    margin: auto;
  }

  .circle.red {
    color: red;
  }

  .image-input input {
    border: none;
    width: 100%;
  }
`;
