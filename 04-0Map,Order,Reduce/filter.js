//filtering accroding to condition
const arr=[5,1,3,2,6];

//filtering odd values
    function isOdd(x){
        return x%2;
    }

    const output=arr.filter(isOdd);
    console.log(output)    //[ 5, 1, 3 ]
    
    //filtering greateer than 4:
    const greater= arr.filter((x)=>{
        return x>4;
    })
    console.log(greater)    //[ 5, 6 ]


