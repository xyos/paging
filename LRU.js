exports.run = function(data,frames){
  var queue = new Array();
  var page_faults = 0;
  if (frames == 0) return 0;

  for (var i = 0; i < frames; i++) {
    queue.push([ '' , 0 ]);
  };

  for (var i = 0; i < data.length; i++) {
    var k = find(queue,data[i]);

    for (var j = 0; j < queue.length; j++) {
      queue[j][1]++;
    };

    if (k){
      queue[k-1] = [queue[k-1][0],0]
    }
    else {
      queue.splice(findBiggest(queue),1);
      var d = data[i];
      queue.push([ d , 0 ]);
      page_faults++;
    }
  };
  return page_faults;
}
var find = function(arr,obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === obj) return i+1;
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

