function ageCalculator(name, yearOfBirth, currentYear)
{
  var age = currentYear - yearOfBirth;
  var result = name + " is " + age + " years old.";
  return result;
}
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));