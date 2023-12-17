import { RestaurantList } from "../utils/constant";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(RestaurantList);
  const filteredList = () => {
    const filteredListArry = restaurantList.filter(
      (restaurant) => restaurant.rating >= 4
    );
    setRestaurantList(filteredListArry);
  };
  return (
    <>
      <button onClick={filteredList}>Top Rated Restaurant</button>
      <div className="res-container">
        {restaurantList.map((Restaurant) => (
          <ResturantCard Restaurant={Restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
