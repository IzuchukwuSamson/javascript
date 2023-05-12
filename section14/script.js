'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const izu = new Person('Izu', 1997);
const mary = new Person('mary', 1998);
const jude = new Person('jude', 1999);
const kent = new Person('kent', 2000);
// console.log(izu, mary, jude, kent);

console.log(jude instanceof Person);
