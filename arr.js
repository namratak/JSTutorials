///Example array functions 1
var myArray = ['a', 'ab', 'c', 'd'];
myArray.push("end");
myArray.unshift("start");
myArray = ["start",...myArray, "end"]; //spread operator

function secretVar() {
  let priv = "super secret code";
  return function(){
    return priv;
  }
}

let getPrivvar = secretVar();
console.log(getPrivvar());
////------------Example 2 array--------------

// let a1 = Array.from({length:5}, n => Math.random());
// console.log('1', a1);
//
// let a2 = new Array(5).fill(null).map(n => Math.random());
// console.log('2', a2);
//
//
// for(i in x){xArr.push(x[i]); }

//-------------- Example to revers String-------------------------
function reverseString(str) {
  let newString = "";

  for (let i = str.length - 1; i>=0 ; i--){
    newString = newString + str[i];
  }
  return newString;
}

console.log(reverseString('I love javascript'));

//---------Example to find missing array elements
function missing(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = x + 1;
        if (arr[i] != x) {
            return(x);
        }
    }}
missing([1, 2, 3, 4, 5, 6, 7, 8, 10])

//----------- Example to print elements of array using prototype
//prints elements of the array
// let arr = [1,2];
// Array.prototype.print = (arr) => {
//   for(let i=0; i <= arr.length; i++){
//     console.log(arr[i]);
//   }
// }

Array.prototype.print = function() {
  console.log(this.join(','));
};


[1,2,4,5,7].print();

//----------------- Example to pick any two numebers between 1 to 10 which when added has total 10 or less than 10
function simpleMathProblem() {

  let number1 = Math.floor(Math.random() * 10);

  let number2 = Math.floor(Math.random() * 10);


  if (number1 + number2 <= 10) {

    console.log(`${number1} + ${number2}`);

  }

}

console.log(simpleMathProblem());
