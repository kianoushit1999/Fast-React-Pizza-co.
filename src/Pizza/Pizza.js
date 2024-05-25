import React from "react";

const Pizza = (props) => {
    return <li>
        <img src={props.pizza.photoName} alt={props.pizza.name} />
        <div>
            <h3>{props.pizza.name}</h3>
            <p>{props.pizza.ingredients}</p>
            <span>{props.pizza.price}$</span>
        </div>
    </li>
}

export default Pizza;