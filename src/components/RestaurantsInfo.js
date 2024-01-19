import { useContext, useState } from "react";

import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import UserContext from "../utils/context/UserContext";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/customHooks/useRestaurantInfo";

const RestaurantsInfo = () => {
  const { resId } = useParams();
  const [expandCategory, setExpandCategory] = useState("");
  // Custom hook to get restaurant information.
  const resInfo = useRestaurantInfo(resId);
  const { loggedInUser } = useContext(UserContext);
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, areaName, city, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const itemCategories =
    resInfo?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold text-lg m-2">{name}</h1>
      <h2 className="text-m">{cuisines.join(", ")}</h2>
      <h3 className="text-sm mb-2">{`${areaName} - ${city}`}</h3>
      <h1>Loggedin User: {loggedInUser}</h1>
      <div className="border-b-2 border-dotted"></div>
      <h4 className="font-bold mt-2">{costForTwoMessage} </h4>
      <h5 className="text-sm">{`avgRating - ${avgRating}`}</h5>
      <div className="mt-4">
        {itemCategories.map((itemCategory) => (
          // controlled component
          <RestaurantCategory
            key={itemCategory.card.card.title}
            data={itemCategory.card.card}
            handleExpandCategory={() => {
              setExpandCategory(itemCategory.card.card.title);
            }}
            isCategoryExpanded={itemCategory.card.card.title === expandCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsInfo;
