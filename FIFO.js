exports.run = function(data,frames){
  var queue = new Array();
  var page_faults = 0;
  if (frames == 0) return 0;
  for (var i = 0; i < frames; i++) {
    queue.push('');
  };
  for (var i = 0; i < data.length; i++) {
    if (find(queue,data[i])){
    }
    else {
      queue.shift();
      queue.push(data[i]);
      page_faults++;
    }
  };
  return page_faults;
}
var find = function(arr,obj) {
  return (arr.indexOf(obj) != -1);
}

