import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./assets/img/logo.svg";
import Category from "./components/Category";
import Panier from "./components/Panier";
import Inactif from "./components/Inactif";

import Title from "./components/Title";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  //mise en place des states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [panier, setPanier] = useState([]);

  // console.log(panier);

  //Récupération des données via axios
  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-api-backend.herokuapp.com/"
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(Id);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <header>
        <img src={logo} alt="deliveroo"></img>
      </header>

      <section>
        <Title
          name={data.restaurant.name}
          description={data.restaurant.description}
          img={data.restaurant.picture}
        ></Title>
      </section>

      <main>
        <div className="leftBlock">
          {data.categories.map((elem, index) => {
            if (elem.meals.length !== 0) {
              return (
                <Category
                  key={index}
                  elem={elem}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  panier={panier}
                  setPanier={setPanier}
                ></Category>
              );
            }
          })}
        </div>
        <div className="rightBlock">
          {}
          <div className="panier">
            {isActive === true ? (
              <Panier
                panier={panier}
                setPanier={setPanier}
                data={data}
                setData={setData}
              />
            ) : (
              <div>
                <Inactif />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
