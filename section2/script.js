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
