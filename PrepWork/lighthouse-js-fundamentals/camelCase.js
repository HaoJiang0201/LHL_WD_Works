let camelCase = function(input) {
  // Your code here
  var stringOutput = "";
  var stringTmp1 = input.split(" ");
  var size = stringTmp1.length;
  if(size >= 2)
  {
    stringOutput += stringTmp1[0];
    for(var i = 1; i < size; i ++)
    {
      for(var j = 0; j < stringTmp1[i].length; j ++)
      {
        var stringTmp2 = "";
        stringTmp2 = stringTmp1[i][j];
        if(j == 0)
          stringTmp2 = stringTmp2.toUpperCase();
        stringOutput += stringTmp2;
      }
    }
  }
  else
    for(var j = 0; j < size; j ++)
    {
      stringOutput += stringTmp1[j];
    }
  return stringOutput;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));