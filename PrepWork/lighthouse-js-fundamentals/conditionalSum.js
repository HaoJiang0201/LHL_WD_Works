const conditionalSum = function(values, condition) {
  // Your code here
  let sumUp = 0;
  switch(condition)
  {
    case "even":
      for(let i = 0; i < values.length; i ++)
      {
        if(values[i] % 2 === 0)
          sumUp += values[i];
      }
      break;
    case "odd":
      for(let i = 0; i < values.length; i ++)
      {
        if(values[i] % 2 !== 0)
          sumUp += values[i];
      }
      break;

  }

  return sumUp;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));