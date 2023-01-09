'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

// FUNCTIONS
function logger() {
  console.log('My name is Izu');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(1, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Declarations vs Expression

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1960, 'Bob'));

// function calling another function
function cutFruitProcessor(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitProcessor(apples);
  const orangePices = cutFruitProcessor(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePices} oranges`;
  return juice;
}

console.log(fruitProcessor(1, 2));

// Basic Array Operation
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //gets the last element in the array

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = (birthYeah) => {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age11 = calcAge(years[0]);
const age21 = calcAge(years[1]);
const age31 = calcAge(years[years.length - 1]);
console.log(age11, age21, age31);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Basic Array Operations (Methods)
const myFriends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = myFriends.push('Jay');
console.log(myFriends);
console.log(newLength);

myFriends.unshift('John');
console.log(myFriends);

// // Remove elements
myFriends.pop(); // Last
const popped = myFriends.pop();
console.log(popped);
console.log(myFriends);

myFriends.shift(); // First
console.log(myFriends);

console.log(myFriends.indexOf('Steven'));
console.log(myFriends.indexOf('Bob'));

myFriends.push(23);
console.log(myFriends.includes('Steven'));
console.log(myFriends.includes('Bob'));
console.log(myFriends.includes(23));

if (myFriends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
