import React from "react";
import ReactDOM from "react-dom/client";
import resData from "./liveData";
//Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/053/644/798/small/food-delivery-logo-design-template-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

//Restraunt-card component:
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

//BODY: SEARCH , RESTRAUNT-CONTAINER
const Body = () => {
  return (
    <div className="body">
      <div className="search">SEARCH bar will come here</div>
      <div className="res-container">

       {resData.map((restraunt)=>(
        <RestrauntCard key={restraunt.info.resId} resData={restraunt}/>
       ))}
      </div>
    </div>
  );
};

//First component- top level:   js function returning peice of jsx code
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
