import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./assets/img/logo.svg";
import Category from "./components/Category";

import Title from "./components/Title";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  //mise en place des states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
              return <Category key={index} elem={elem}></Category>;
            }
          })}
        </div>
        <div className="rightBlock">
          <div className="panier"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
