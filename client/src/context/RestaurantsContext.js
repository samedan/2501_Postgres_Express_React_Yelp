import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurants = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{ restaurants: restaurants, setRestaurants, addRestaurants }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
