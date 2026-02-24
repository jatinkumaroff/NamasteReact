import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestrauntMenu from "./components/RestaurantMenu";

//First component- top level:   js function returning peice of jsx code
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <RestrauntMenu />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
