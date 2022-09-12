/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

let heightMark = 1.69;
let weightMark = 78;
const BMIMark = weightMark / (heightMark * heightMark);
console.log(BMIMark);

let heightJohn = 1.69;
let weightJohn = 78;
const BMIJohn = weightJohn / (heightJohn * heightMark);
console.log(BMIJohn);

console.log(BMIMark > BMIJohn);

// Truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
// falsy values will be converted to false when used as a Boolean
// Aside these values, every other value is a truthy value

// SWITCH STATEMENT
// switch statement was designed for equality
// unlike if/else statement that was desined for comparison
const day = 'friday';
switch (day) {
  case 'monday':
    console.log('A');
    console.log('A1');
    break;
  case 'tuesday':
    console.log('B');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('C');
    break;
  case 'friday':
    console.log('D');
    break;
  case 'saturday':
    console.log('E');
    break;
  case 'sunday':
    console.log('F');
    break;

  default:
    console.log('G-Z');
    break;
}

const date = 'monday';
if (date === 'monday') {
  console.log('A');
} else if (date === 'tuesday') {
  console.log('B');
} else {
  console.log('G-Z');
}

// Statement and expressions
3 + 4; //is an expression
1998; //is an expression

true && false && !false; //are statements
// if/else are also statements
if (23 > 10) {
  const str = '23 is bigger'; //a statement
}
