// let promiseToClean = new Promise(function(resolve, reject){
//
//   //cleaning room
//
//   let isClean = false;
//
//   if(isClean) {
//     resolve('Clean');
//   } else {
//     reject('not clean');
//   }
// });
//
// promiseToClean.then(function(fromResolve){
//   console.log('the room is' + fromResolve)
// }).catch(function(fromReject){
//   console.log('the room is' + fromReject)
// })

//new example
let cleanRoom = function() {
  return new Promise(function(resolve,reject){
    resolve('Cleaned the room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject){
    resolve(message + 'remove Garbage') ;
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject){
    resolve(message + 'won Icecream');
  });
};

// cleanRoom().then(function(result){
//   return removeGarbage(result);
// }).then(function(result){
//   return winIcecream(result);
// }).then(function(result){
//   console.log('finished' + result);
// })

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log('one of them is finished')
});
