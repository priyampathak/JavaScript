//? Array

//* Array in JS are resizable, and when you do copy operation in Array it will maka a shallow copy, means they both have
//* same reference point

const ar1 = [1, 2, 3, 4]

//& Array Methods
console.log(ar1.length)//*  to get length of array
console.log(ar1.push(6))//*  to push an element in array
console.log(ar1.pop())//*  to take out last value from array
console.log(ar1.join())//*  it will convert array to string
console.log(ar1.slice(1, 3))//*  it will make new array and from index 1 to 3-1
console.log(ar1.splice(1, 3))//*  it will also make a new array from index 1 to 3 but it also remove element from original array that were selected

//& Special Array Methods
console.log(Array.isArray("Hello"))//*  tells if the value is array or not
console.log(Array.from("Hello"))//*  converts any value to array
console.log(Array.of(1, 2, 4))//*  to make a array

//& More Array Methods
//* push() adds in orginal array, but concate() makes a new array
//* Suppose you have 2 arrays and you want to merge them in new array

let arr1 = ["Spiderman", "Superman", "Batman"]
let arr2 = ["Ironman", "Thor", "Captain America"]

let arr3 = arr1.concat(arr2);
console.log(arr3)//* Merging of 2 Arrays using concat

let arr4 =  [...arr1, ...arr2]//* Merging of 2 Array using spread operator
console.log(arr4)