// console.log("Hello world");
// let a : string;
// let b : number;
// let c:boolean;
// let d:any; //butun degerleri alabilir
// a="Hello World "
// b = 22
// c=true;
// // d="you rock my world";
// d=25;
// console.log("a:",a,"b:",b,"c:",c,"d:",d);
// console.log('what is up');
// !ARRAY TYPES
// let langs:string[];
// langs = ["HTML","Css","React","Js","Ts"]
// console.log(langs);
// console.log(...langs);
// let numbers:number[];
// numbers=[1,2,3,8,25];
// console.log(numbers);
// console.log(...numbers);
// let boolValues:Array<boolean>;
// boolValues=[true,false,false]
// console.log(boolValues);
// console.log(...boolValues);
// let a:Array<number>=[1,5,6,9]
// console.log(a);
// console.log(...a);
// !FUNCTION
// function addNumbers(num1:number,num2?:number): number{
//     if (typeof num2==="undefined") {
//         return num1
//     }
//     return num1 + num2
// }
// console.log(addNumbers(20,30))   //50
// console.log(addNumbers(10));  //10
function addNumbers(num1, num2) {
    if (num2 === void 0) { num2 = 100; }
    return num1 + num2;
}
console.log(addNumbers(20)); //120
console.log(addNumbers(20, 50)); //70
