import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 95%;
  margin: 0 auto;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  span {
    text-align: center;
  }

  button {
    padding: 15px 30px;
    background-color: orange;
    color: var(--color-background);
    border-radius: 10px;
    width: 120px;
  }

  .logo {
    width: 100px !important;
    height: 100% !important;
  }

  .logo img {
    width: 100% !important;
    height: 100% !important;
  }

  .company-name {
    gap: 0.5rem;
  }

  .company-name .row {
    gap: 0.5rem;
  }

  .company-name .row img {
    width: 80px;
  }
`;
