//? For of, For in, Map Filter Reduce

//& For of
let a = [1, 4, 5, 3, 8, 2]

for (const i of a) {
    console.log(i)//*   it will print all the elements of array
}

//& For in
for (const i in a) {
    console.log(i)//*   it will print all the keys of array, which is its index value. 
    //* so for in loop used for to print the keys

    console.log(a[i])//*    This will print all the values of Keys. Or all the values of array
}

//& For each
a.forEach((i, index)=>{//* index will tell index number
    console.log(i, index)
})


//& Filter

let array = [23, 4, 12, 43, 2, 66, 55, 10]

//* to get numbers greater than 10

let filterArray = array.filter((gn)=>gn>10)//* here gn is like i, which has all element of array

//& Map

//* to add 10 in each element of an array, map basically used to perform some operation to each element of an array

let mapArray = array.map((an)=>an+10)


//& reduce

//* reduce is basically use to reduce the object or array to a single solution. e.g to find sum of all elements

let initial = 0
let reduceArray = array.reduce((accumulator, currentValue)=> accumulator + currentValue, initial) //* initial on first loop accumulator has value 0 which we have defined in the initial variable. Then accumulator has value of acc+curr. And currentValue holds each value of the array.

console.log(reduceArray)