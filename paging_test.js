var lru = require('./LRU.js')
var fifo = require('./FIFO.js')
var opt = require('./OPT.js')
//var data = [7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1]
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz0123456789"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

var makedata = function(n,seed){
  var data = new Array();
  for (var i = 0; i < n; i++) {
    data.push(seed.charAt(Math.floor(Math.random() * seed.length)));
  };
  return data;
}

var data = makedata(100,uppercase);

console.log("{ name : 'optimal',data:[");
for (var i = 0; i < 10; i++) {
  console.log(opt.run(data,i) + ",");
};
console.log("]},");
console.log("{ name : 'lru' ,data:[");
for (var i = 0; i < 10; i++) {
  console.log(lru.run(data,i) + ",");
};
console.log("]},");
console.log("{ name : 'fifo' ,data:[");
for (var i = 0; i < 10; i++) {
  console.log(fifo.run(data,i) + ",");
};
console.log("]},");


