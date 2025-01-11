import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

function AddRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const { addRestaurants } = useContext(RestaurantsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // /url/api/v1/restaurants
      const response = await RestaurantFinder.post("/", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      console.log(response);
      addRestaurants(response.data.data.restaurant);
    } catch (err) {}
  };

  return (
    <div className="mb-4 ">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="form-control"
            />
          </div>

          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
              placeholder="Price Range"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurant;
