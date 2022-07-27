import styled from "styled-components";

export const StyledRightbar = styled.aside`
  height: 800px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  top: 1rem;
  right: 2rem;
  position: sticky;

  .border {
    border: 1px var(--color-border) solid;
    padding: 10px;
    gap: .5rem;
  }
`