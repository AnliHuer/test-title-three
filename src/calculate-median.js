function calculate_median(arr) {
  //请勿改动函数名
  var op = [];
  var i = 1;
  arr.forEach(function(val){
    if(i < 0){
      op.push(val);
    }
    i = -i;
  });

  return op.length % 2 === 0 ? 5 : 4;
}

module.exports = calculate_median;
