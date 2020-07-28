import React from "react";

const Line = ({ panier, setPanier, elem }) => {
  return (
    <div>
      <button>-</button>
      <span>{elem.quantité}</span>
      <button>+</button>
      <span>{elem.title}</span>
    </div>
  );
};

export default Line;
