'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const izu = new Person('Izu', 1997);
const mary = new Person('mary', 1998);
const jude = new Person('jude', 1999);
const kent = new Person('kent', 2000);
console.log(izu, mary, jude, kent);

// console.log(jude instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);
izu.calcAge();
mary.calcAge();
console.log(izu.__proto__);
console.log(izu.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(izu.species);

console.log(izu.hasOwnProperty('firstName'));
