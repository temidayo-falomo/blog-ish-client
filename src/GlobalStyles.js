import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --color-text: #3A3A3A;
    --color-header: #000;
    --color-background: #fff;
    --color-brown: #FFEEDE;
    --color-border: #C8C8C8;
    letter-spacing: 0.0125rem;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Bona Nova', serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: 'Ropa Sans', sans-serif;
  }

  img {
    width: 100%;
  }

  ul li {
    list-style: none;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'poppins', serif;
  }

  .App {
    width: 100%;
    height: 100%;
  }

  .row {
    display: flex;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

   .center {
    align-items: center;
  }


`;
export default GlobalStyle;
