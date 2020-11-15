//class constructor example
class Vec{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

displayVector(vec){
  return (console.log(vec.x,vec.y));
}

 plus(add){
    let add1 = new Vec(this.x + add.x, this.y + add.y);
  //  let add2 = [this.y + add.y];
  return (add1);
};

minus(sub) {
  let sum = new Vec(this.x - sub.x, this.y - sub.y);
  return sum;
}

get length() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
}
let vec1 = new Vec(1,2).plus(new Vec(2,3));

//let vec2 = new Vec(3,4);
//let vec3 = vec1.plus(vec2);


//console.log(vec1);
vec1.displayVector;
// console.log(vec2.minus(vec1));
// console.log(vec2.length);
