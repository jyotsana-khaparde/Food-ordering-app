
const ResturantCard = ({Restaurant}) => {
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${Restaurant.info.cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="res-card-info">
        <h3>{Restaurant.name || Restaurant.info.name}</h3>
        <h4>{Restaurant.description || Restaurant.info.locality}</h4>
        <h5>{Restaurant.time}</h5>
        <div className="res-card-rating">
          <i className="fas fa-star">{Restaurant.rating || Restaurant.info.avgRating}</i>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
