//Function prototype constructor example
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}
//instantiate an object
const book1 = new Book('Book one', 'John Doe', '2020');
const book2 = new Book('Book two', 'Jane Doe', '2021');

console.log(book1.getSummary());

//revealing module example 2
let myModule = (function(){
  let _data = [];
  let _render = function(){

  }
  let _add = function(){

  }
  let _remove = function(){

  }
  return {
    render: _render
  }
})();

// let myModule = {
//   data: [],
//   render: () => {
//
//   },
//   add: () => {
//
//   },
//   remove: () => {
//
//   }
// };

myModule.render();
