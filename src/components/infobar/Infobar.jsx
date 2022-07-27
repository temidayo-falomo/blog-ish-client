
import React, { useContext, useState } from "react";
import { categoriesData } from "../../categories-data/CategoriesData";
import { AppContext } from "../../helper/Context";
import { StyledInfobar } from "./Infobar.styled";

function Infobar() {
  const [number, setNumber] = useState(0);
  const { blogsList, selectedCategory, setSelectedCategory } =
    useContext(AppContext);

  const allCategories = [
    "All",...new Set(
      categoriesData.map((item) => {
        return item;
      })
    ),
  ];

  const getSelectedCategory = (param) => {
    setSelectedCategory(param);
  };

  const handleActiveCard = (param) => {
    setNumber(param);
  };

  return (
    <StyledInfobar>
      {allCategories.map((data, index) => {
        return (
          <div
            className="bdr row"
            key={index}
            onClick={() => getSelectedCategory(data)}
          >
            <button
              className={`normal-btn ${index === number && "btn-active"}`}
              onClick={() => handleActiveCard(index)}
            >
              {data}
            </button>
          </div>
        );
      })}
    </StyledInfobar>
  );
}

export default Infobar;
