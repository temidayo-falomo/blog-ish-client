import React from "react";
import RightbarBox from "../rightbar-box/RightbarBox";
import { StyledRightbar } from "./Rightbar.styled";

function Rightbar() {
  return (
    <StyledRightbar>
      <div className="border col">
        <img src="./assets/favs.jpeg" alt="" />
        <span>Coming Soon</span>
        <h3>Temidayo's Journey</h3>
        <span>@Temidayo Falomo</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, rem?
        </p>
      </div>
      <RightbarBox />
    </StyledRightbar>
  );
}

export default Rightbar;
