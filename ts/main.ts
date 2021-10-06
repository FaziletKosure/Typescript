// tsc => typescript compiler .ts => .js


// Javascript versions
//  ES5 (supported all browsers)
//  ES6 (2015) Arrows, classes, template strings, let.. const.., [...array]
//  ES7 (ES2016) Array.prototype.includes
//  ES8 ES2017

function myFunction(myName) {
    console.log(myName);
    
}
myFunction("Fazilet")

// -----------------------------------------------------------------------

const myArray = ["Fazilet","Coding", "Love" ]
const copyArray=[...myArray]


// @typeAnnotations : type
// Any
// Number
// String
// Boolean
// Arrays string[], Number[], any[]
// Enum
// Tuple [type1, type2]
// Unknown
// TYPE INFERENCE?

//  Static Typing
let y; // type Any
y=5;
y="Harun";
y=true;
let x : string;  //typeAnnotations
 x = "Fazilet";
// x = 5; not convert 
x = "Serra"

let age=37 // type Inference

let a : boolean;
// a=true or false

let firstArray: string[];
firstArray=["a","b","c"];

let numberArray: number[];
numberArray=[1,2,3];

let anyArray:any[];
anyArray=["a","b",1,"c",5,true]

// ---------------ENUM-----------------------------
enum Color {purple, black, red}
let bgColor=Color.red;
bgColor=Color.black;

// --------------------TUPLE----------------------
let myTupleError:[String, number];
myTupleError=["Not found", 404];


// ----------------------------UNKNOWN------------------------
let k= true;

let l: any;
k=l;

let notSure: unknown;
notSure="Fazilet";
notSure=37;
notSure=false;
notSure=["a","b"]
// a=notSure // can not assign


/**
* Type Assertions?
* shut your mounth typescript; I know what I doe !
 */

 let message;
 message="I love Coding"

 const newMessage=(<string>message).toLowerCase(); // type assertions
 const newNewMessage=(message as string).toLowerCase(); // type assertions