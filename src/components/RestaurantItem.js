import React from "react";

function RestaurantItem({ name, about, coffeeShop }) {
  
  return (
    <div className="restaurant-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="coffeeShop">
        {}
        {coffeeShop.map((shop, index) => {
          return <span key={index}>{shop}</span>
        })}
      </div>
    </div>
  );
}

export default RestaurantItem;