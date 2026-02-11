const RestrauntCard = ({resData}) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    areaName,
  } = resData?.info;
  const {deliveryTime}=resData?.info?.sla;
  const IMG_PRE_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="res-card">
      <img className="res-img" src={IMG_PRE_URL+cloudinaryImageId} alt="res-main-img" />
      <h3 className="name">{name}</h3>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestrauntCard;