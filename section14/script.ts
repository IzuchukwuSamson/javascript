'use strict';

const ThePerson = function (firstName: string, birthYear: number): void {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const sam = new ThePerson('sam', 1990);
// console.log(sam);

// console.log(sam instanceof ThePerson);

// let myName: ThePerson = new ThePerson('sam', 1997)
// let car: Person = new Car();

//Prototypes
ThePerson.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(ThePerson.prototype);
sam.calcAge();
mary.calcAge();
console.log(sam.__proto__);
console.log(sam.__proto__ === ThePerson.prototype);
console.log(ThePerson.prototype.isPrototypeOf(ThePerson));

ThePerson.prototype.species = 'Homo Sapiens';
console.log(sam.species);

console.log(sam.hasOwnProperty('firstName'));
