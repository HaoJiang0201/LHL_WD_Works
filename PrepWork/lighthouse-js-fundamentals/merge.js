function merge(array1, array2)
{
  var array = [];
  var index = 0;
  for(var i = 0; i < array1.length; i ++)
  {
    for(var j = index; j < array2.length; j ++)
    {
      if(array2[j] <= array1[i])
      {
        array.push(array2[j]);
        index ++;
      }
    }
    array.push(array1[i]);
  }
  if(index < array2.length)
  {
    for(var k = index; k < array2.length; k ++)
    {
      array.push(array2[k]);
    }
  }
  return array;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);