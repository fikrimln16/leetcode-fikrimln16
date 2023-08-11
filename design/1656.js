/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  pointer = 0;
  stream = new Array(n);
};

/** 
* @param {number} idKey 
* @param {string} value
* @return {string[]}
*/
OrderedStream.prototype.insert = function(idKey, value) {
  stream[idKey - 1] = value;
  const result = [];
  if(!stream[pointer]) {
      return [];
  } else {
      while(stream[pointer]){
      result.push(stream[pointer]);
      pointer ++;}
  }
  return result;
};

var obj = new OrderedStream(5);
var param_1 = obj.insert(3, "ccccc");
var param_2 = obj.insert(1, "aaaaa");
var param_3 = obj.insert(2, "bbbbb");
var param_4 = obj.insert(5, "eeeee");
var param_5 = obj.insert(4, "ddddd");
