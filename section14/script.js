'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jane = new Person('jane', 1990);
// const mary = new Person('mary', 1998);
// const jude = new Person('jude', 1999);
// const kent = new Person('kent', 2000);
// console.log(jane, mary, jude, kent);

// console.log(jude instanceof Person);

//Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(Person.prototype);
// jane.calcAge();
// mary.calcAge();
// console.log(jane.__proto__);
// console.log(jane.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jane.species);

// console.log(jane.hasOwnProperty('firstName'));

// ES6 Syntax
// class expresssion
// const PersonCl = class Person {};
// class Person {
//   constructor(firstname, birthYear) {
//     this.firstname = firstname;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2039 - this.birthYear;
//   }
//   set fullName(name) {
//     // return `${this.firstname} ${this.birthYear}`
//     if (name.includes(' ')) {
//       this.fullName = name;
//     }
//   }
// }

// const jessica = new Person('jessisa', 1996);
// jessica.calcAge();
// console.log(jessica.__proto__ === Person.prototype);

// Person.prototype.greet = function () {
//   console.log('Hey there!' + this.firstname);
// };

// jessica.greet();
// console.log(jessica.age);

// // GETTEERS AND SETTERS
// const account = {
//   owner: 'Jane',
//   movements: [200, 300, 400, 500, 600],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(move) {
//     this.movements.push(move);
//   },

//   get age() {
//     return;
//   },
// };

// account.latest = 50;

// console.log(account.movements);

// STATIC METHODS
// Array.from(document.querySelectorAll);
// const hey = Number.parseFloat(12);
// console.log(hey);

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); 

*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
