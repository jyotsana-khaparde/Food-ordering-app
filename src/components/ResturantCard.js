import { CDN_IMAGE } from "../utils/constant";

const ResturantCard = ({ Restaurant }) => {
  return (
    <div className="bg-slate-200 p-3 m-3 rounded-lg hover:bg-slate-400">
      <div>
        <img
          className="w-52 rounded-lg"
          // w-16 md:w-32 lg:w-48 ||| w-52 rounded-lg
          src={`${CDN_IMAGE}${Restaurant.info.cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-lg font-bold">
          {Restaurant.name || Restaurant.info.name}
        </h3>
        <h4>{Restaurant.description || Restaurant.info.locality}</h4>
        <h5>{Restaurant.time}</h5>
        <div>
          <i className="fas fa-star font-bold">
            {Restaurant.rating || Restaurant.info.avgRating}
          </i>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
