import React from "react";
import Categories from "./Categories";

const Category = ({ elem, category }) => {
  return (
    <div className="boxes">
      <h2>{elem.name}</h2>

      <div className="category">
        {elem.meals.map((elem, index) => {
          console.log(elem.id);
          return <Categories keys={elem.id} elem={elem}></Categories>;
        })}
      </div>
    </div>
  );
};

export default Category;
