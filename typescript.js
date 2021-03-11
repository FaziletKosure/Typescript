// console.log("Hello world");
// let a : string;
// let b : number;
// let c:boolean;
// let d:any; //butun degerleri alabilir
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class Person{
//     private name:string;
//     private age:number;
//     private phone:string;
//     constructor(name:string,age:number,phone:string){
//         this.name=name;
//         this.age=age;
//         this.phone=phone;
//         console.log("created Person");
//     }
//     showInfo(){
//         console.log(`Name: ${this.name} Age: ${this.age} Phone: ${this.phone}`);
//     }
// }
// let person1= new Person("Fazilet",36,"1234567")
// person1.showInfo()
// // console.log(person1.name);
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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showInfo = function () {
        _super.prototype.showInfo.call(this);
        console.log("Salary: " + this.salary);
    };
    Employee.prototype.changeDepartment = function () {
        console.log("change department");
    };
    return Employee;
}(Person));
var employee1 = new Employee("Fazilet", 36, "1234567", 4000);
employee1.showInfo();
employee1.changeDepartment();
console.log(employee1);
console.log(employee1.salary);
