const RestrauntCard = ({resData}) => {
  const {
    name,
    resId,
    image: { urlWithParams },
    rating: { aggregate_rating },
    cft: { text: cost_for_two_ctr },
    cuisine,
  } = resData?.info;

  return (
    <div className="res-card">
      <img className="res-img" src={urlWithParams} alt="res-main-img" />
      <h3 className="name">{name}</h3>
      <h4>continental , indian </h4>
      <h4>{aggregate_rating}</h4>
      <h4>{cost_for_two_ctr}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestrauntCard;