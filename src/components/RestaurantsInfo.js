import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/customHooks/useRestaurantInfo";

const RestaurantsInfo = () => {
  const { resId } = useParams();
  // Custom hook to get restaurant information.
  const resInfo = useRestaurantInfo(resId);

  if (!resInfo) {
    return <Shimmer />;
  }
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
