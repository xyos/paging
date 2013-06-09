var next = function (data) {
  var data_next = new Array();
  for (var i = 0; i < data.length; i++) {
    var counter = 0;
    for (var j = i+1; j < data.length-1; j++) {
      if (data[i] == data[j]) {
        break;
      }else{
        counter++;
      };
    };
    data_next.push([data[i],counter]);
  };
  return data_next;
};


exports.run = function(data,frames){

  data = next(data);
  var queue = new Array();
  var page_faults = 0;
  if (frames == 0) return 0;

  for (var i = 0; i < frames; i++) {
    queue.push(['',data.length+1]);
  };

  for (var i = 0; i < data.length; i++) {

    var k = find(queue,data[i]);
    if (k){
      queue[k-1][1] = data[i][1];
    }
    else {
      queue.splice(findBiggest(queue),1);
      queue.push([data[i][0],data[i][1]]);
      page_faults++;
    }
    for (var j = 0; j < queue.length; j++) {
      queue[j][1]--;
    };
  };
  return page_faults;
}
var find = function(arr,obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === obj[0]) return i+1;
  };
  return false;
}
var findBiggest = function(q) {
  var biggest = 0;
  var index = 0;
  for (var i = 0; i < q.length; i++) {
    if (q[i][1] > biggest) {
      biggest = q[i][1];
      index = i;
    }
  };
  return index;
}

