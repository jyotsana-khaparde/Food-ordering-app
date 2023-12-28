import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    const restaurants = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurants)
    setFilterRestaurants(restaurants);
   };

  const showTopRatedRestaurant = () => {
    const filteredListArry = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setRestaurantList(filteredListArry);
  };
  if (restaurantList?.length === 0) {
    return <Shimmer/>
  }
  return (
    <>
      <button onClick={showTopRatedRestaurant}>Top Rated Restaurant</button>
      <input type="text" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}/>
      <button onClick={() => {
        const filteredList = restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilterRestaurants(filteredList);
      }}>Search</button>
      <div className="res-container">
        {filterRestaurants?.map((Restaurant) => (
          <Link key={Restaurant.info.id} to={`/restaurants/${Restaurant.info.id}`}>
          <ResturantCard Restaurant={Restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
