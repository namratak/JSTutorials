// given an array of integers [8,5,2,1,7,10]
// write an array method to read these numbers, get evens, and sort them ascendingly
// [8,5,2,1,7,10].getEvensAndSort(); // output is [2,8,10]

Array.prototype.getEvensAndSort = function()  {
// note digg into how sort work
	let sortedArr = this.sort((a, b) => a - b); // use 'this'to access array and recap how `this` works
  var newArr = new Array();
//  console.log(sortedArr);
  for (let i=0; i<sortedArr.length; i++){
  	if(sortedArr[i] % 2 === 0){
      newArr.push(sortedArr[i])
    }
  }
  return newArr;
}

console.log([8,5,2,1,7,10].getEvensAndSort());
