var person1 = ['Andrew', 25];
var person2 = ['Myke', 40];
var final = [...person1, ...person2];

function greet(name, age) {
  return "Hi my name is " + name + " and I have " + age + " years";
}
//console.log(greet('Alex', 42));

console.log(greet(...person1));
console.log(greet(...person2));
console.log(final);
