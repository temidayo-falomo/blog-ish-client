import styled from "styled-components";

export const StyledRightbarBox = styled.div`
  background-color: #F4F4F4;
  padding: 10px;
  height: 330px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  .row {
    justify-content: space-between;
    align-items: flex-end;
    gap: .5rem;
  }

  .row button {
    padding: 5px 15px;
    min-width: 80px;
    border: 1px black solid;
  }

  .row input {
    border: none;
    outline: none;
    border-bottom: 1px var(--color-border) solid;
    width: 100%;
    background-color: transparent;
    margin-top: 1rem;
    padding: 10px 0;
  }

`