//used for unique values
const arr=[5,1,3,2,6,6,5,3,2,1];


//copying array to set:
const set1= new Set(arr);
console.log(set1)           // Set(5) { 5, 1, 3, 2, 6 }
//or initially its empty

//adding:
set1.add(11);

//findging some value - > true/false

console.log(set1.has(21))       //false
console.log(set1.has(11))       //true

//removing:
set1.delete(3)

//clear whole set:
set1.clear()


//GETTING A NEW ARRAY WITH UNIQUE ELEMENTS , SET IS AN OBJECT , WE NEED ARRAY BACK:

const arrUnique = [...new Set(arr)];
console.log(arrUnique);                 //[ 5, 1, 3, 2, 6 ]



//we can iterate over it using for-of looop:
for(let num of arrUnique){              // can be used with just arrays and not sets
    console.log(num);
}