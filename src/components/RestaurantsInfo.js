import { useEffect, useState } from "react";

const RestaurantsInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  const fetchRestaurantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=434898&catalog_qa=undefined&submitAction=ENTER"
    );
    const data2 = await data.json();
    setResInfo(data2);
  };
  const { name, areaName, city, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  return (
    <>
      <div>Info of restaurant</div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{`${areaName} - ${city}`}</h3>
      <h4>{costForTwoMessage}</h4>
      <h5>{`avgRating - ${avgRating}`}</h5>
    </>
  );
};

export default RestaurantsInfo;
