import React from "react";
import { useSelector } from "react-redux";

function Basket() {
  const basket = useSelector((state) => state.basket.value);
  console.log(basket);

  return (
    <div>
      <h1>Your Basket</h1>
      {basket.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default Basket;
