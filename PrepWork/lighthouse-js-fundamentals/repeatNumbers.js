let repeatNumbers = function(data) {
  // Put your solution here
  let newData = "";
  let dataSize = data.length;
  for(let i = 0; i < dataSize; i ++)
  {
    let repeatNum = data[i][0];
    let repeatTime = data[i][1];
    for(let j = 0; j < repeatTime; j ++)
      newData += repeatNum;
    if(i < dataSize - 1)
      newData += ", ";
  }
  return newData;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));