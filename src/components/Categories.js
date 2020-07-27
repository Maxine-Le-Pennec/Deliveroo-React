import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = ({ elem }) => {
  return (
    <div className="cards">
      <div className="infos">
        <h3>{elem.title}</h3>
        <p>{elem.description.slice(0, 60)}</p>
        <div>
          <span className="price">{elem.price}€</span>
          {elem.popular && (
            <span className="pop">
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </div>
      </div>
      {elem.picture && (
        <div className="categoriesImg">
          <img src={elem.picture}></img>
        </div>
      )}
    </div>
  );
};

export default Categories;
