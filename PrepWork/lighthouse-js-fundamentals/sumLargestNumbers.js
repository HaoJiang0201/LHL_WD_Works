let sumLargestNumbers = function(data) {
  // Put your solution here
  let largestNum1 = data[0];
  let largestIdx = 0;
  for(let i = 1; i<data.length; i ++)
  {
    if(data[i] >= largestNum1)
    {
      largestNum1 = data[i];
      largestIdx = i;
    }
  }
  data.splice(largestIdx, 1);
  let largestNum2 = data[0];
  for(let i = 0; i<data.length; i ++)
  {
    if(data[i] >= largestNum2)
      largestNum2 = data[i];
  }
  return largestNum1 + largestNum2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));