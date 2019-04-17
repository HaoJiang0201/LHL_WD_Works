var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var size = ingredients.length;
// Write a while loop that prints out the contents of ingredients:
var repeat = 0;
while (repeat < size) {
  console.log(ingredients[repeat]);
  repeat++;
}
console.log("------ While loop completed -------");
// Write a for loop that prints out the contents of ingredients:
for (repeat = 0; repeat < size; repeat ++) {
  console.log(ingredients[repeat]);
}
console.log("------ For loop completed -------");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (repeat = size-1; repeat >= 0; repeat --) {
  console.log(ingredients[repeat]);
}