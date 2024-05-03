//? Arrow function and IIFE

//& Arrow Function
const hey = ()=>{
    return "hello" //* with { } you need to return something
}

const hello = ()=>( "hellos" )// * but here with ( ) you do not need to return any thing

console.log(hey())
console.log(hello())

//& IIFE
(function db(){
    console.log("DB Conected")
})();

