const {IMG_URL} = require("../utils/constants")
const RestrauntCard = (props) => {
  console.log(props);
  console.log(props.resName);
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={IMG_URL}
        alt="res-main-img"
      />
      <h3 className="name">{props.resName}</h3>
      <h4>continental , indian </h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestrauntCard;