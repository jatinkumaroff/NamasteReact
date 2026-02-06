const arr=[5,1,3,2,6];

function sum(acc,curr){
               acc=acc+curr;            // performing operation with current element
               return acc;              // returning the result accumulated till now
            }

const output=arr.reduce(sum,0);
console.log(output); 