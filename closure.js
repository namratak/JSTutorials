// let f = () => {
//   let i = 1;
//   let j = 2;
//   return () => {
//     console.log(i);
//   }
// }
//
// console.dir(f());
//
// for (let i = 0; i<3; i++) {
//   const f = () => {
//     console.log(i);
//   }
//   f();
// }
// function addNumbers(n){
// 	return add;
// }
// function add(i) {
//   console.log(i);
//  return i+n;
// }

//New answer --->
//
// function addNumbers(n) {
//   function add(i) {
//     return n+i;
//   }
//   return add;
// }
//closure example to add 2 numbers
let addNumbers = (n) => {
  return result => result + n;
}

let total = addNumbers(1);

console.log("Added numbers are:" + total(5));
