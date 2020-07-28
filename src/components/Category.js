import React from "react";
import Categories from "./Categories";

const Category = ({
  setPanier,
  panier,
  elem,
  category,
  isActive,
  setIsActive,
}) => {
  return (
    <div className="boxes">
      <h2>{elem.name}</h2>

      <div className="category">
        {elem.meals.map((elem, index) => {
          // console.log(elem.id);
          return (
            <Categories
              key={elem.id}
              elem={elem}
              isActive={isActive}
              setIsActive={setIsActive}
              panier={panier}
              setPanier={setPanier}
            ></Categories>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
