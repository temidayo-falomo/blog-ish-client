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
    padding: 12px 25px;
    background-color: #5466e8;
    color: var(--color-background);
    border-radius: 10px;
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

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;

    .company-name h1 {
      font-size: 1rem;
      margin: auto;
    }
  }
`;
