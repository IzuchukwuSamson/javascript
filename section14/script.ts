'use strict';

const ThePerson = function (firstName: string, birthYear: number): void {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Izu = new ThePerson('Izu', 1997);
// console.log(Izu);

// console.log(Izu instanceof Person);

// let myName: ThePerson = new ThePerson('Izu', 1997)
// let car: Person = new Car();

// Protoype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Izu.calcAge();
