/* 
?   Memory
*   Memory is of two types, Stack and Heap. Stack gives you copy and Heap gives you refrennce of data variable.
*   Primitive Data types uses Stack and Non-primitive Data Types uses Heap Memory.  
*/

let a="you"; //*    Example of Primitive Data type that passing copy of a to b
let b=a;
b="iam"

/*
?   Strings
 */

//& Concatination
let q = "Hey-you"
let w = "Priyam"
console.log(`${q} how are you`)

//& String Properties

console.log(q.length)//*    
console.log(q.toUpperCase())//* to do upper case
console.log(q.charAt(2))//* to check at perticular index, which character is present
console.log(q.indexOf('e'))//*    to check a perticular character at which index
console.log(q.substring(0, 2))//*    to get a sub-string form a string, but last index (2) will not be count
console.log(w.slice(-5, 2))//*   
console.log(q.trim())//*    to remove the blank spaces
console.log(w.replace("m", "a"))//* it will replace m with a
console.log(w.includes('a'))//* to check wheather a string or character is present or not
console.log(q.split('-'))//*   it will split the string whenever the '-' comes
console.log(q.split(" ").join(','))//* it will split the string on space and add ','      

/*
?   Number
 */

//& Number properties

let num = 400.8809
let num2 = 100000000

console.log(num.toFixed(2))//*  it will give you fixed value upto 2 decimals
console.log(num.toPrecision(3))//*  it will give the precise round of value\
console.log(num2.toLocaleString('en-IN'))//*  this represents the value in indian standards e.g. 10,000,00
console.log(Math.abs(-4))//*  it will make -ve value +
console.log(Math.round(4.566))//*  it wil give you round of value