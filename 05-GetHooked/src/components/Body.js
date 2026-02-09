import RestrauntCard from "./RestrauntCard";
import listData from "../../liveData";
import { useState } from "react";

const Body = () => {
  //normal js varibale
  let resDataJS = listData;
  console.log(resDataJS);
  
  
  //LOCAL STATE VARIBALE
  const [resData,setData]= useState(listData)


  return (
    <div className="body">
      <div className="filter">
        {/* HERE ON CLICK , FILTERING WILL BE DONE AND WE'LL GET A NEW ARRAY OF FILTERED RESTRAUNTS */}
        <button
          className="filter-btn"
          onClick={() => {
            const updatedData = resData.filter(
              (res) => res.info.rating.aggregate_rating > 4,
            );
            console.log(updatedData);
            setData(updatedData)
          }}
        >
          TOP RATED RESTRAUNTS
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedData = resData.filter(
              (res) => res.info.rating.aggregate_rating <= 4,
            );
            console.log(updatedData);
            setData(updatedData)
          }}
        >
          LEAST RATED RESTRAUNTS
        </button>
        
      </div>
      <div className="search">SEARCH bar will come here</div>
      <div className="res-container">
        {resData.map((restraunt) => (
          <RestrauntCard key={restraunt.info.resId} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
