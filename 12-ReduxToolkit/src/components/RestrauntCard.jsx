import React from "react";

const IMG_PRE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestrauntCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, areaName } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card hover:shadow-xl hover:w-[216] w-[219] mx-4 my-4 bg-gray-100 py-3 rounded-2xl px-4 ">
      <img
        className="res-img rounded-lg "
        src={IMG_PRE_URL + cloudinaryImageId}
        alt="res-main-img"
      />
      <h3 className="name font-bold py-2">{name}</h3>
      <div className="text-sm">
        <h4>Area: {areaName}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery in {deliveryTime} min</h4>
      </div>
    </div>
  );
};

// higher order component => takes restraunt card as input and give card with PROMOTED BANNER!!
export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-5 px-1 rounded bg-green-300" >promoted</label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};
export default RestrauntCard;
