
// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown

let myName : string = "imran mahmud";
let age : number;
age = 33;
let isHungry:boolean = false;

type stringOrNumber = number | string 

type direction = "left" | "right"|"bottum"|"top"
let gameDirection : direction ="right"

let studentId :stringOrNumber = 420;
studentId = "web3-420";
studentId = 22;

// object 

interface Person {
    name : string;
    age : number;
    hobby? : string;
}


type personType = {name : string, age : number, hobby: string }

let person: Person = {
    name : 'imran mahmud',
    age : 24,
    hobby :'sleeping'
}

let person2 : Person = {
    name : 'Di Pul',
    age : 26,    
}

// Array
const number:(number|string|boolean)[] = [33, 35, 55, 60,'imran mahmud', true]

const people : Person[]= [
    {
        name : 'imran mahmud',
        age : 24,
        hobby :'sleeping'
    },
    {
        name : 'imran mahmud',
        age : 24,
        hobby :'sleeping'
    },
    {
        name : 'imran mahmud',
        age : 24,
        hobby :'sleeping'
    }
]

// function
const greeting = (name:string):void => {
    console.log(`hello ${name}`)
}
greeting("imran")


const add = (a:number ,b: number):number =>{
    return a + b

}
const introduce = ({name, age, hobby}: Person):void =>{
    console.log(`hello my name is  ${name} age ${age} hobby ${hobby}`)
}

introduce({
    name :'imran',
    age : 24,
    hobby : 'codeing'
})

const getArray = <T>(arr:T[]):T[] => {
    return arr
}

getArray<string>(['jdhjhd','jfheuhfehf'])
getArray<number>([22,2,3,])

// enum
enum Week {
    sat = "SAT",
    sun = "SUN",
    mon = "MON",
    tue = "TUE",
    wed = "WED",
    thu = "THU",
    fri = "FRI"
}

console.log(Week.thu)