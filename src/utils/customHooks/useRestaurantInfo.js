import { useEffect, useState } from "react";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  const fetchRestaurantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}`
    );
    const data2 = await data.json();
    setResInfo(data2);
  };
  return resInfo;
};

export default useRestaurantInfo;
