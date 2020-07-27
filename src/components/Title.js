import React from "react";

const Title = ({ name, description, img }) => {
  return (
    <div className="blocRestau">
      <div className="nameDescription">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img className="mainPicture" src={img} alt="plat du restaurant"></img>
      </div>
    </div>
  );
};

export default Title;
