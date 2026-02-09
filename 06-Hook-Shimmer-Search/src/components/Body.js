import RestrauntCard from "./RestrauntCard";
import listData from "../../liveData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //LOCAL STATE VARIBALE
  const [resData, setData] = useState(listData);
  const [searchText, setSearchText] = useState("");
  console.log("component re rendered");

  if (resData.length === 0) {

    return <div>
       <div className="filter">
        {/* HERE ON CLICK , FILTERING WILL BE DONE AND WE'LL GET A NEW ARRAY OF FILTERED RESTRAUNTS */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listData.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText)
              console.log(filteredRestaurant)
              setData(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedData = listData.filter(
              (res) => res.info.rating.aggregate_rating > 4,
            );
            console.log(updatedData);
            setData(updatedData);
          }}
        >
          TOP RATED RESTRAUNTS
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedData = listData.filter(
              (res) => res.info.rating.aggregate_rating <= 4,
            );
            console.log(updatedData);
            setData(updatedData);
          }}
        >
          LEAST RATED RESTRAUNTS
        </button>
      </div>

      <Shimmer />;
      </div>
  }


  return (
    <div className="body">
       <div className="filter">
        {/* HERE ON CLICK , FILTERING WILL BE DONE AND WE'LL GET A NEW ARRAY OF FILTERED RESTRAUNTS */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listData.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText)
              console.log(filteredRestaurant)
              setData(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedData = listData.filter(
              (res) => res.info.rating.aggregate_rating > 4,
            );
            console.log(updatedData);
            setData(updatedData);
          }}
        >
          TOP RATED RESTRAUNTS
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedData = listData.filter(
              (res) => res.info.rating.aggregate_rating <= 4,
            );
            console.log(updatedData);
            setData(updatedData);
          }}
        >
          LEAST RATED RESTRAUNTS
        </button>
      </div>
     
      <div className="res-container">
        {resData.map((restraunt) => (
          <RestrauntCard key={restraunt.info.resId} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
