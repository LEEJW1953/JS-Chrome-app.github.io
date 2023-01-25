function sayHello(name, age) {
    console.log("Hello my name is " + name + " and I'm " + age);
}
const nameOfPerson = ['nico', 'dal', 'lynn'];
const ageOfPerson = [23, 21, 24];
for (i = 0; i < 3; i++) {
    sayHello(nameOfPerson[i], ageOfPerson[i]);
};