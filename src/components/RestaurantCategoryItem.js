import { CDN_IMAGE } from "../utils/constant";
import { addCart } from "../utils/redux/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCategoryItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddCart = (info) => {
    // whatever data we pass in addCart it will be send in `action.payload` by default.
    dispatch(addCart(info));
  };
  return (
    <div className="border-t-2 p-4 m-2 flex justify-between">
      <div className="w-7/12 text-left">
        <h2 className="font-medium">{data.card.info.name}</h2>
        <h6 className="text-xs">{data.card.info.description}</h6>
        <h5 className="font-thin">₹ {data.card.info.price / 100}</h5>
      </div>
      <div className="w-3/12">
        <img
          className="rounded-lg"
          src={`${CDN_IMAGE}${data.card.info.imageId}`}
          alt=""
        />
        <button
          className="bg-black text-white px-3 rounded-md"
          onClick={() => handleAddCart(data.card.info)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RestaurantCategoryItem;
