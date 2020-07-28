import React from "react";
import Line from "./Line";

const Panier = ({ panier, setPanier }) => {
  // Calcul du sous total
  let subTotal = 0;
  for (let i = 0; i < panier.length; i++) {
    let convert = parseFloat(panier[i].price);
    subTotal += convert;
  }

  // Calcul du total
  let fdp = 2.5;
  // let total = subTotal + fdp;

  return (
    <div className="panierActif">
      <button>Valider</button>
      {panier.map((elem, index) => {
        //  console.log(elem.meals);
        return (
          <Line panier={panier} setPanier={setPanier} key={index} elem={elem} />
        );
      })}

      <div>
        <div>
          <span>Sous-total </span>
          <span> {subTotal} €</span>
        </div>
        <div>
          <span>Frais de livraison</span>
          <span>2,50 €</span>
        </div>
        <div>
          <span>Total</span>
          <span>{subTotal + fdp} €</span>
        </div>
      </div>
    </div>
  );
};

export default Panier;
