import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import useOnlineState from "../utils/customHooks/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurants);
    setFilterRestaurants(restaurants);
  };

  const showTopRatedRestaurant = () => {
    const filteredListArry = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setRestaurantList(filteredListArry);
  };
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline, please check your internet connection.
      </h1>
    );
  }
  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <input
        className="border-solid border-2 border-gray-400 rounded-lg"
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        className="bg-slate-200 p-2 m-2 rounded-lg hover:bg-slate-400"
        onClick={() => {
          const filteredList = restaurantList.filter((restaurant) =>
            restaurant.info.name
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
          setFilterRestaurants(filteredList);
        }}
      >
        Search
      </button>
      <button
        className="bg-slate-200 p-2 m-2 rounded-lg hover:bg-slate-400"
        onClick={showTopRatedRestaurant}
      >
        Top Rated Restaurant
      </button>
      <div className="flex flex-wrap">
        {filterRestaurants?.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={`/restaurants/${Restaurant.info.id}`}
          >
            <ResturantCard Restaurant={Restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
