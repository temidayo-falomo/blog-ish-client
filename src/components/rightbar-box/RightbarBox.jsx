import React from "react";
import { StyledRightbarBox } from "./RightbarBox.styled";

function RightbarBox() {
  return (
    <StyledRightbarBox>
      <img src="./assets/fax.svg" alt="" />
      <h4>Do you want to follow my Coding Journey ?</h4>
      <p>
        A newsletter from me, delivered straight to your inbox twice (or once) a
        week.
      </p>
      <div className="row">
        <input type="email" placeholder="Enter Your Email..." />
        <button>Sign Up</button>
      </div>
    </StyledRightbarBox>
  );
}

export default RightbarBox;
