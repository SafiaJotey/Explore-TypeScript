const number1=23;
const myName="Rajib"
console.log("hello TS",number1,myName);


// typeScript is strict about type
let age:number=24;
let isClear:boolean=true;
let student:string='safia';
console.log(age);
console.log(isClear);
console.log(student);



//function

function add(first:number,second:number):number{
  const result:number=first+second;
  return result;
}
const addition:number=add(45,3);
console.log(addition);

//array

const ages:number[]=[23,45,3];
console.log(ages);

//object
type person={name:string,age?:number};
const stuff:person={
    name:"safia",
  

}

//interface

interface employee{name:string,age:number};
interface developer  extends employee{designstion:string, language:string};
const people:developer={
    name:"zuku",
    designstion:"webdesigner",
    language:"english",
    age:30
   
}

