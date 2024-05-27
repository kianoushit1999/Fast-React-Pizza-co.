import React from "react";
import Pizza from "./Pizza";

import { pizzaData } from "../Data/data";

const Menu = () => {
  return (
    <div className="menu">
      <h2> Our Menu </h2>
      <ul className="pizzas">
        {pizzaData.length > 0 && pizzaData.map((pizza, index, pizzaList) => {
          return <Pizza key={pizza.name} pizza={pizza} />;
        })}
        ;
      </ul>
    </div>
  );
};

export default Menu;
