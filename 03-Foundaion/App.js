import React from "react";
import ReactDOM from "react-dom/client";

//react element

const heading = React.createElement("h1",{id:"heading"},"this is react heading");

const root =ReactDOM.createRoot(document.getElementById("root"))


//js/broswer/reatc can NOT understnad jsx , its (babel in)parcel that transpiles it for js to understnad
//that is jsx ===transpiled===> React.createElement - rest same  
const jsxHeading = <h1 id="jsxHeading"> this is jsx </h1>;

// root.render(jsxHeading)
root.render(heading)