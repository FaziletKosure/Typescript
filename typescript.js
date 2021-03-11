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
// function addNumbers(num1:number,num2:number=100): number{
//     return num1 + num2
// }
// console.log(addNumbers(20)); //120
// console.log(addNumbers(20,50)); //70
// function addNumbers(num1:number,num2:number): void{
//     console.log(num1 + num2)
//     return
// }
// addNumbers(20,50)
// !Class
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("created Person");
    }
    Person.prototype.showInfo = function () {
        console.log("Name: " + this.name + " Age: " + this.age + " Phone: " + this.phone);
    };
    return Person;
}());
var person1 = new Person("Fazilet", 36, "1234567");
person1.showInfo();
console.log(person1.name);
