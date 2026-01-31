import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
    "div",                                              //parent tag
    {id:"parent"}, 
    React.createElement(
        "div",                                          //child tag
        {id:"child"}, 
        React.createElement(
            "h1",                                       //grandchild tag
            {id:"grandchild"},
            "I am an H1 tag insdie the react's app.js")
    )

)















// create root inside(this elemnt)
const root = ReactDOM.createRoot(document.getElementById("root"));



/*Add content in root*/
root.render(parent);           //redner method takes js obj => convert it into tag and put int root
console.log(parent);