"use strict"
console.log(`hello`);

// reguler function

// function say(messege) {
// 	console.log(messege);
// } 
// say();

// function say(messege = `hi js`) {
// 	console.log(messege);
// } 
// say();

// function expration
let ab = function (x,y) {
  console.log(x+y);
  return
}
ab(70,30);


// arrow function
let sum = (x,y) => x+y;
console.log(sum(100,100));


// rest_perameter
function pr(...jr) {
 console.log(jr);	
}
pr(`ishan`,`hablu`,`mama`,`ahmmed`);

function pk(...pr) {
 console.log(pr);	
}
pk(`ishan`,`hablu`,`mama`,`ahmmed`,`jk`,`jr`);

function lm(a,b,...etc) {
	console.log(a,b,...etc);
}
lm(`ishan`,`hablu`,`mama`,`ahmmed`,`jk`,`jr`);

// spred oparetor :
const bar = [1,2,3,6,7,8,9,0];
const vsr = [...bar,11,22,67,77,60];
console.log(vsr);

// Object letarel syntex 
function say(massage,name) {
	return {
    massage,
    name
  }
}
console.log(say(`hi`,`abir`));

// for....of lopp & for....in loop
// let n = [1,2,4,5,5]
// for(mn of n){
//   console.log(mn);
// }

// for in lopp index count kpre
// let m = [1,3,4,5,6,7]
// for (m in amiarry){
//   console.log(amiarry);
// }
// const  obj = {
//   name : `abir`,
//     id : 1
// }
// for( index in obj){
//   console.log(index);
// }

// tamplete string
let name = `abir`;
let age = 18;
console.log(`my name is ${name} & i am ${age} year's old`);

// arry distructuring
const aryy= [1,3,5,6,7,8,3,69];
let [a,b,c,...z] = aryy;
console.log(a,b,c, ...z);

// onject distructuri
let   obj2={
  name1: `abir`,
  class2: 10,
  roll : 3,
}
const {name1,class2,roll} = obj2;
console.log(name);

// class
class book {
  constructor(book_name,price){
    this.book_name = book_name;
    this.price = price;
  }
}
let book_details = new book(`rich dad poor dad`,`300 tk`);
console.log(book_details);

// class expration
let person = class{
  constructor (name){
    this.name = name;
  }
}
let the_name_of_person = new person(`abir`);
console.log(the_name_of_person);

// static
class massage{
  static fun(){
    console.log(`hi abir`);
  }
}
massage.fun();

// ekta class er assests onno class e neya
// this is extends
class Parents {
  assests1(){
      console.log(`eta amar dadar assests`);
  }
  assests2(){
  console.log( `eta amar babar`);
  }
}
class ami extends Parents {
    // myassests(){
    //   super.assests1();
    //   super.assests2();
    // }
	}
let myassests = new ami();
myassests.assests1();

console.log(`hello github`);