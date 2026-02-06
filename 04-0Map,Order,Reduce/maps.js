//to transform an array:

const arr=[5,1,3,2,6];

//applying map:
// ArrayName.map( transformation logic ie a function )

function transformationDouble(x){
    return x*2;
}
//in map, a functin is passed and for each element that function is run and that element is replaced by the function's return value
// like double in this case:

const double= arr.map(transformationDouble); 
console.log(arr);     //[ 5, 1, 3, 2, 6 ]
console.log(double);  //[ 10, 2, 6, 4, 12 ]

//OR IN OTHER FORM, WE CAN DIRECTLY PASS IN THE FUNCTION LIKE:
    //for triple:
    const tripleOutput=arr.map((x)=>{
        return x*3
    })

    console.log(tripleOutput); //[ 15, 3, 9, 6, 18 ]