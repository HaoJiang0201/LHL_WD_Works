function loopyLighthouse(range, multiples, words)
{
  var start = range[0];
  var end = range[1];
  for(var i = start; i <= end; i++)
  {
    if((i % multiples[0] === 0) && (i % multiples[1] === 0))
    {
      console.log(words[0] + words[1]);
    }
    else
    {
      if (i % multiples[0] === 0)
        console.log(words[0]);
      else
      {
        if (i % multiples[1] === 0)
          console.log(words[1]);
        else
          console.log(i);
      }
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);