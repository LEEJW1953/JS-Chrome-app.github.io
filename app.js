function sayHello(name, age) {
  console.log("Hello my name is " + name + " and I'm " + age);
}
const nameOfPerson = ["nico", "dal", "lynn"];
const ageOfPerson = [23, 21, 24];
for (i = 0; i < 3; i++) {
  sayHello(nameOfPerson[i], ageOfPerson[i]);
}

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function dviide(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}
plus(8, 60);
dviide(98, 20);

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + " nice to meet you");
  },
};

player.sayHello("nico");
player.sayHello("lynn");

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

console.log(calculator.plus(2, 3));

const age = parseInt(prompt("How old are you?"));
console.log(age);
console.log(isNaN(age));
if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age <= 18 && age <= 50) {
  console.log("you can drink.");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
