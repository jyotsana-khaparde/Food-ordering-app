
const ResturantCard = ({Restaurant}) => {
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bttsvynpr8x77z6hu9b1"
          alt=""
        />
      </div>
      <div className="res-card-info">
        <h3>{Restaurant.name}</h3>
        <h4>{Restaurant.description}</h4>
        <h5>{Restaurant.time}</h5>
        <div className="res-card-rating">
          <i className="fas fa-star">{Restaurant.rating}</i>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
