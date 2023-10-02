class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log(`Description: ${this.age} and ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    // super calls the constructor inside the Person class
    super(_name, _age);

    // custome behaviour of the program
    this.yearsOfExperience = _yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding`);
  }
}

// let person = new Person('jeff', 41);
// let programmer = new Programmer('Dom', 56, 12);
// programmer.code();
// programmer.describe();

// console.log(person);
// console.log(programmer);

const allProgrammers = [
  new Programmer('Dom', 56, 12),
  new Programmer('Jeff', 41, 10),
];

function developsoftware(programmers) {
  // develop software
  for (let programmer of programmers) {
    programmer.code();
  }
}

developsoftware(allProgrammers);
