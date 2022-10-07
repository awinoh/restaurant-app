import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import RestaurantList from "./RestaurantList";
import rest from "../data/rest";

function App() {
  return (
    <div>
      <NavBar />
      <Home color={rest.color} />
      <About bio={rest.bio}  />
      <RestaurantList restaurants={rest.restaurants} />
    </div>
  );
}

export default App;