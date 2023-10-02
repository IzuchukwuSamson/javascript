/**Polymorphism */

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Generic animal sound!');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('WOOF WOOF!');
  }
}

const a1 = new Animal('Goat');
const a2 = new Dog('Jeff');

a1.makeSound();
a2.makeSound();
