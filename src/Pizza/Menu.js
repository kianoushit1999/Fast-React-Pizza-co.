import React from "react";
import Pizza from "./Pizza";

import { pizzaData } from "../Data/data";

const Menu = () => {
  return (
    <div className="menu">
      {pizzaData.length > 0 ? (
        <>
          <h2> Our Menu </h2>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
        </>
      ) : (
        <h2>
          We are no longer available to satisfy your need. Please check that out
          in our working hours.
        </h2>
      )}

      <ul className="pizzas">
        {pizzaData.length > 0 &&
          pizzaData.map((pizza, index, pizzaList) => {
            return <Pizza key={pizza.name} pizza={pizza} />;
          })}
        ;
      </ul>
    </div>
  );
};

export default Menu;
