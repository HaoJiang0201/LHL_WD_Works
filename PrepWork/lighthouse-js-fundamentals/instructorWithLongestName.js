const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestNameidx = 0;
  let nameLength = instructors[0].name.length;
  for(let i = 1; i < instructors.length; i ++)
  {
    if(nameLength < instructors[i].name.length)
    {
      longestNameidx = i;
      nameLength = instructors[i].name.length;
    }
  }
  return instructors[longestNameidx];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}]));