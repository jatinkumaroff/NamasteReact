import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"this is react heading");

const root =ReactDOM.createRoot(document.getElementById("root"))

// using one compponent in multiple areas:: THIS IS COMPONENT COMPOSITION
const Component1= ()=><h1>this is component number 1</h1>
const Component2= ()=><h1>this is called using tag</h1>
const Component3= ()=><h1>this is called using function</h1>
const HeadingComponent=() =>(
    <div>
     {98+89}
     <Component1/>              {/* calling simply using tags*/}
     <Component2/>              {/* calling simply using tags*/}
     {Component3()}             {/*calling using a function*/}
     </div>
)   


//js/broswer/reatc can NOT understnad jsx , its (babel in)parcel that transpiles it for js to understnad
//that is jsx ===transpiled===> React.createElement - rest same  
// const jsxHeading = <h1 id="jsxHeading"> this is jsx </h1>;


root.render(<HeadingComponent />)
// root.render(<jsxHeading/>)


