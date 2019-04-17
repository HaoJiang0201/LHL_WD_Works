function sayHello1(name) {
  console.log("Hello, " + name);
}

sayHello1("Pola");

function sayHello2(name) {
  return "Hello, " + name;
}
let getName = sayHello2("Ruby");
console.log(getName);