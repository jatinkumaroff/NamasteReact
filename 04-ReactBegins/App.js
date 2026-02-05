import React from "react";
import ReactDOM from "react-dom/client";

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
const RestrauntCard = (props) => {
  console.log(props);
  console.log(props.resName);
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media.gettyimages.com/id/1428409514/photo/a-male-chef-serving-a-fine-dining-dish-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=OK0lACbKto6oiOjg5xgUxY2fPS8CtT3fX9HhK2ntQ-M="
        alt="res-main-img"
      />
      <h3 className="name">{props.resName}</h3>
      <h4>continental , indian </h4>
      <h4>4.4 stars</h4>
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
        {" "}
        <RestrauntCard resName="from props" />
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
