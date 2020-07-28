import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = ({ setPanier, panier, elem, setIsActive, isActive }) => {
  // console.log(elem);
  return (
    <div
      className="cards"
      onClick={() => {
        //console.log(elem.id);
        setIsActive(true);

        let newTab = [...panier];
        newTab.push({
          id: elem.id,
          title: elem.title,
          price: elem.price,
          quantité: 1,
        });
        // console.log(newTab);
        setPanier(newTab);
      }}
    >
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
          <img src={elem.picture} alt="plats"></img>
        </div>
      )}
    </div>
  );
};

export default Categories;
