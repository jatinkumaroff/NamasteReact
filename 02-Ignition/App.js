/*
creating a multilevel structur like:
    <div id="parent">
        <div id="child">
            <h1>I AM GRANDCHILD</h1>
        </div>
    </div>

*/

const parent=React.createElement(
    "div",                                              //parent tag
    {id:"parent"}, 
    React.createElement(
        "div",                                          //child tag
        {id:"child"}, 
        React.createElement(
            "h1",                                       //grandchild tag
            {id:"grandchild"},
            "I am an H1 tag")
    )

)


/*
creating a sibling structure like:
    <div id="parent">
        <div id="child">
            <h1>I AM GRANDCHILD 1</h1>
            <h1>I AM GRANDCHILD 2</h1>
        </div>
    </div>

*/

//convert child args to array and pass asa many children as you want:


const sibParent=React.createElement(
    "div",                                              //parent tag
    {id:"parent"}, 
    React.createElement(
        "div",                                          //child tag
        {id:"child"}, 
    [   
        React.createElement("h1",{id:"grandchild1"},"I am an H1 tag , sibling 1"),       //sibling 1
        React.createElement("h2",{id:"grandchild2"},"I am an H2 tag , sibling 2")        //sibling 2
    ]
    )

)










/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//this heading is a JS object (it is react element which is nothing but js object )
const heading = React.createElement(
    "h1",                                   //tag
    {id:"heading" , xyz:"abc"},             //attributes
    "hello from react!"                     //children
); 




// create root inside(this elemnt)
const root = ReactDOM.createRoot(document.getElementById("root"));



/*Add content in root*/
root.render(sibParent);           //redner method takes js obj => convert it into tag and put int root
console.log(sibParent);