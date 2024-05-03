//? Objects and symbol and Rest operator

const mySymb = Symbol('key1')

let ob1 = {
    name : "Priyam Pathak",
    age  : 24,
    "Time Zone" : "GMT 5:30",
    [mySymb] : "symb1",
    greet : function(){
        console.log(`hello ${this.name}`)//* this refers to current context
    }
}

//* to access the object 
console.log(ob1["Time Zone"])//* way 1
console.log(ob1.age)//* way 2
console.log(ob1.greet())


//& Methods 
Object.freeze(ob1) //* to freez the object so that no one can change it\
Object.keys(ob1)  //* to get keys
Object.values(ob1) //* to get values
Object.entries(ob1)

//& Destructuring
let ob2 = {
    course_name : "Java",
    price : 5000,
    date : '24, June'
}

const {course_name : cn} = ob2 //* we destructured object feild course name as cn
const {course_name}=ob2 //* this is also detructuring, you can directly access course_name now
console.log(cn)

//& Rest operator
function abc(...num){//* this rest operator will gather all values and combine in an array, it is look line spread operator
    return num
}
abc(200, 300, 400)