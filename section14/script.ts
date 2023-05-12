'use strict';

// const ThePerson = function (firstName: string, year: number): void {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const sam = new ThePerson('sam', 1990);
// console.log(sam);

// console.log(sam instanceof ThePerson);

// let myName: ThePerson = new ThePerson('sam', 1997)
// let car: Person = new Car();

//Prototypes
// ThePerson.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(ThePerson.prototype);
// sam.calcAge();
// mary.calcAge();
// console.log(sam.__proto__);
// console.log(sam.__proto__ === ThePerson.prototype);
// console.log(ThePerson.prototype.isPrototypeOf(ThePerson));

// ThePerson.prototype.species = 'Homo Sapiens';
// console.log(sam.species);

// console.log(sam.hasOwnProperty('firstName'));

// ES6 Syntax
// class expresssion
// const PersonCl = class Person {};

class ThePerson {
  public name: string = 'Sam';
  public year: number = 20;

  constructor(firstname: string, birthYear: number) {
    this.name = firstname;
    this.year = birthYear;
  }

  calcAge() {
    console.log(2037 - this.year);
  }
}

const felix = new Person('felix', 1996);
