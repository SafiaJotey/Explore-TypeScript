"use strict";
const number1 = 23;
const myName = "Rajib";
console.log("hello TS", number1, myName);
// typeScript is strict about type
let age = 24;
let isClear = true;
let student = 'safia';
console.log(age);
console.log(isClear);
console.log(student);
//function
function add(first, second) {
    const result = first + second;
    return result;
}
const addition = add(45, 3);
console.log(addition);
//array
const ages = [23, 45, 3];
console.log(ages);
const stuff = {
    name: "safia",
    age: 21
};
