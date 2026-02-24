import RestaurantCard from "./RestrauntCard";
import FETCH_URL from "../../liveData";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./RestrauntCard";

const Body = () => {
  // LOCAL STATE

  const [fullList, setFullList] = useState([]);
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(FETCH_URL);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setFullList(restaurants);
      setResData(restaurants);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  // ONLINE STATUS HOOK
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );
  }

  // LOADING STATE
  if (resData.length === 0) {
    return (
      <div>
        <div className="filter flex">
          <div className="search">
            <input
              type="text"
              className="search-box border m-3 rounded-xl"
              value={searchText}
              onChange={(e) => {
                const value = e.target.value;
                setSearchText(value);

                const filtered = fullList.filter((res) =>
                  res.info.name.toLowerCase().includes(value.toLowerCase()),
                );

                setResData(filtered);
              }}
            />

            <button
              className="m-3 bg-green-200 py-1 rounded-lg px-5"
              onClick={() => {
                const filtered = fullList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );

                setResData(filtered);
              }}
            >
              Search
            </button>

            <button
              className="m-3 bg-gray-200 py-1 rounded-lg px-5"
              onClick={() => {
                const updatedData = fullList.filter(
                  (res) => res?.info?.avgRating > 4,
                );
                setResData(updatedData);
              }}
            >
              TOP RATED RESTAURANTS
            </button>
          </div>
        </div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="search-box border m-3 rounded-xl"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              setSearchText(value);

              const filtered = fullList.filter((res) =>
                res.info.name.toLowerCase().includes(value.toLowerCase()),
              );

              setResData(filtered);
            }}
          />

          <button
            className="m-3 bg-green-200 py-1 rounded-lg px-5"
            onClick={() => {
              const filtered = fullList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setResData(filtered);
            }}
          >
            Search
          </button>

          <button
            className="m-3 bg-gray-200 py-1 rounded-lg px-5"
            onClick={() => {
              const updatedData = fullList.filter(
                (res) => res?.info?.avgRating > 4.5,
              );
              setResData(updatedData);
            }}
          >
            TOP RATED RESTAURANTS
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {resData.map((restaurant) => (

          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.id % 3 == 0 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
