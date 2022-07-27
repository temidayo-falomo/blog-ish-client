import styled from "styled-components";

export const StyledInfobar = styled.div`
  width: 95%;
  margin: 1rem auto;
  min-height: 60px;
  display: flex;
  align-items: center;
  overflow: auto;
  gap: .5rem;
  border-top: 1px #ADADAD solid;
  border-bottom: 1px #ADADAD solid;

  .bdr {
    border-right: 1px #ADADAD solid;
    padding-right: .5rem;
  }

  .bdr button {
    padding: 12px 20px;
    border-radius: 5px;
    background-color: var(--color-brown);
    min-width: 110px;
    display: inline;
  }

  .bdr button span {
    padding: 3px 5px;
    background-color: #ffdab8;
  }

  .btn-active {
    background-color: orange !important;
    color: #fff;
  }

`;
