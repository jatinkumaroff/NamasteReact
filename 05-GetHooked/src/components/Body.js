import RestrauntCard from "./RestrauntCard";
const Body = () => {
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Top Rated Restraunt
      </button>
      <div className="res-container">
        {" "}
        <RestrauntCard resName="from props" />
      </div>
    </div>
  );
};

export default Body;
