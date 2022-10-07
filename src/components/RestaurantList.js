import React from "react";
import RestaurantItem from "./RestaurantItem";

function RestaurantList({ restaurants }) {
  console.log(restaurants)


  return (
    <div id='restaurants'>
      <h2>My Restaurants</h2>
      <div id='restaurants-list'>
        {}
        {restaurants.map((restaurants) => {
          return (
            <RestaurantItem
              key={restaurants.id}
              name={restaurants.name}
              about={restaurants.about}
              technologies={restaurants.coffeeShop}
            />
          )
        })}
      </div>
    </div>
  )
}
export default RestaurantList;
