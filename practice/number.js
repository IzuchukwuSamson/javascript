// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.EPSILON);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

const log = console.log;

// const today = new Date();
// const endYear = new Date(1995, 11, 31, 23, 59, 59, 999);
// const a = endYear.setFullYear(today.getFullYear());
// const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
// let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
// daysLeft = Math.round(daysLeft); //

function JsClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  let temp = String(hour % 12);
  if (temp === 0) {
    temp === 12;
  }

  temp += (minute < 10 ? ':0' : ':') + minute;
  temp += (second < 10 ? ':0' : ':') + second;
  temp += hour >= 12 ? ' P.M.' : ' A.M.';
  return temp;
}

// const foo = String(9);
// log(typeof foo);

const firstString = '2 + 2'; // Creates a string literal value
const secondString = new String('2 + 2'); // Creates a String object
const sol1 = eval(firstString); // Returns the number 4
const sol2 = eval(secondString); //

// log(sol1);
// log(sol2);

// const gasPrice = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 3,
// });

// console.log(gasPrice.format(5.259)); // $5.259

// const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec', {
//   style: 'currency',
//   currency: 'KRW',
// });

// console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五

const names = ['Hochberg', 'Hönigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// "Hochberg, Hönigswald, Holzman"
