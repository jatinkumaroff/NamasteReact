import RestrauntCard from "./RestrauntCard";
import {FETCH_URL} from "../utils/constants";
import {COARS_PROXY} from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //LOCAL STATE VARIBALE
  const [fullList, setFullList] = useState([]);
  const [resData, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(COARS_PROXY + FETCH_URL);
    const json = await data.json();
    setFullList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (resData.length == 0) {
    return (
      <div>
        <div className="filter">
          {/* HERE ON CLICK , FILTERING WILL BE DONE AND WE'LL GET A NEW ARRAY OF FILTERED RESTRAUNTS */}
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                const filteredRestaurant = fullList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()),
                );
                setData(filteredRestaurant);
              }}
            />
            <button
              onClick={() => {
                const filteredRestaurant = fullList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );
                setData(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const updatedData = fullList.filter(
                (res) => res?.info?.avgRating > 4,
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
              const updatedData = fullList.filter(
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
    );
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
              const filteredRestaurant = fullList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()),
              );
              setData(filteredRestaurant);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = fullList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setData(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedData = fullList.filter(
              (res) => res?.info?.avgRating > 4,
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
            const updatedData = fullList.filter(
              (res) => res?.info?.avgRating <= 4,
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
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
