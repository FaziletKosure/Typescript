// tsc => typescript compiler .ts => .js
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Javascript versions
//  ES5 (supported all browsers)
//  ES6 (2015) Arrows, classes, template strings, let.. const.., [...array]
//  ES7 (ES2016) Array.prototype.includes
//  ES8 ES2017
function myFunction(myName) {
    console.log(myName);
}
myFunction("Fazilet");
// -----------------------------------------------------------------------
var myArray = ["Fazilet", "Coding", "Love"];
var copyArray = __spreadArray([], myArray, true);
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
var y; // type Any
y = 5;
y = "Harun";
y = true;
var x; //typeAnnotations
x = "Fazilet";
// x = 5; not convert 
x = "Serra";
var age = 37; // type Inference
var a;
// a=true or false
var firstArray;
firstArray = ["a", "b", "c"];
var numberArray;
numberArray = [1, 2, 3];
var anyArray;
anyArray = ["a", "b", 1, "c", 5, true];
