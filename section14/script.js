'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jane = new Person('jane', 1990);
const mary = new Person('mary', 1998);
const jude = new Person('jude', 1999);
const kent = new Person('kent', 2000);
console.log(jane, mary, jude, kent);

// console.log(jude instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);
jane.calcAge();
mary.calcAge();
console.log(jane.__proto__);
console.log(jane.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jane.species);

console.log(jane.hasOwnProperty('firstName'));
