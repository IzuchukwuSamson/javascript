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
class Person {
  constructor(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2039 - this.birthYear;
  }
  set fullName(name) {
    // return `${this.firstname} ${this.birthYear}`
    if (name.includes(' ')) {
      this.fullName = name;
    }
  }
}

const jessica = new Person('jessisa', 1996);
jessica.calcAge();
console.log(jessica.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log('Hey there!' + this.firstname);
};

jessica.greet();
console.log(jessica.age);

// GETTEERS
const account = {
  owner: 'Jane',
  movements: [200, 300, 400, 500, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(move) {
    this.movements.push(move);
  },

  get age() {
    return;
  },
};

account.latest = 50;

console.log(account.movements);
