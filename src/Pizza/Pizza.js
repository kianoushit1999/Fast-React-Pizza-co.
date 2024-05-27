import React from "react";

const Pizza = (props) => {
  const pizzaStatus = props.pizza.soldOut;

  return (
    <li className={`pizza ${pizzaStatus? "sold-out": ""}`}>
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.status}</p>
        <span>{pizzaStatus ? "SOLD OUT" : `${props.pizza.price}$` }</span>
      </div>
    </li>
  );
};

export default Pizza;
