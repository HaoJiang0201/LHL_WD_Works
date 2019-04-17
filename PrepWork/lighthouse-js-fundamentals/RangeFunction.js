function range(start, end, step)
{
  var array = [];
  var size = (end - start) / step;
  for(var i = 0; i <= size; i ++)
  {
    array.push(start + i * step);
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));