let numberOfVowels = function(data) {
  // Put your solution here
  let vowelsNum = 0;
  for(let i = 0; i < data.length; i ++)
    if(data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u')
      vowelsNum ++;
  return vowelsNum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));