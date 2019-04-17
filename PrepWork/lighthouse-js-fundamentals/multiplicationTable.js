const multiplicationTable = function(maxValue) {
  // Your code here
  var stringOutput = "";
  let row = maxValue;
  let col = maxValue;
  for(var i = 1; i <= row; i ++)
  {
    for(var j = 1; j <= col; j ++)
    {
      stringOutput += j*i + " ";
    }
    stringOutput += "\n\n";
  }
  return stringOutput;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));