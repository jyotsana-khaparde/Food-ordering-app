import RestaurantCategoryItem from "./RestaurantCategoryItem";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="bg-slate-50 w-6/12 m-auto border-2 my-2 p-2">
      <div
        onClick={() => {
          setShowItems(!showItems);
        }}
        className="flex justify-between"
      >
        <h3 className="font-bold">
          {`${data.title} (${data.itemCards.length})`}{" "}
        </h3>
        <h3>{"🔰"} </h3>
      </div>
      {showItems &&
        data.itemCards.map((itemCard) => (
          <RestaurantCategoryItem data={itemCard} key={itemCard.card.info.id} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
