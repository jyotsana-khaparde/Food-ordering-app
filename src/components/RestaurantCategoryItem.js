import { CDN_IMAGE } from "../utils/constant";

const RestaurantCategoryItem = ({ data }) => {
  return (
    <div className="bg-slate-100 p-2 m-2 flex justify-between">
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
      </div>
    </div>
  );
};

export default RestaurantCategoryItem;
