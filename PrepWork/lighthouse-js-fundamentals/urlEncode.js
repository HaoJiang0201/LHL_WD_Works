const urlEncode = function(text) {
  // Put your solution here
  var array = [];
  let replace = "%20";
  for(let i = 0; i < text.length; i++)
  {
    if(text[i] !== " ")
      array.push(text[i]);
    if(text[i] === " " && i !== 0 && i !== text.length-1)
      array.push(replace);
  }
  var newText = "";
  for(let i = 0; i < array.length; i++)
    newText += array[i];
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));