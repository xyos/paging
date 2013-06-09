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

var data = makedata(90,numbers);
console.log(data);
for (var i = 0; i < 10; i++) {
  console.log("======== Frames : " + i + " ========" );
  console.log("Algoritmo opt, fallos de pågina:");
  console.log(opt.run(data,i));
  console.log("Algoritmo lru, fallos de pågina:");
  console.log(lru.run(data,i));
  console.log("Algoritmo fifo, fallos de pågina:");
  console.log(fifo.run(data,i));
  console.log("=================================");
};



