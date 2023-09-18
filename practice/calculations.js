function dayRate(rate) {
  return 8 * rate;
}

console.log(dayRate(89));

function daysInBudget(budget, rate) {
  let payPerDay = dayRate(rate);
  return (days = Math.floor(budget / payPerDay));
}
console.log(daysInBudget(20000, 89));

// (datyRate) => () => {};
// const noOfDays = 22;
function priceWithMonthlyDiscount(rate, noOfDays, monthlyDiscount) {
  let payPerDay = dayRate(rate);
  let payPerMonth = payPerDay * noOfDays;
  let discount = payPerMonth * monthlyDiscount;

  let theRemainingDaysRate = dayRate(rate);
  let thePayForThoseDays = theRemainingDaysRate;

  return (totalPay = Math.ceil(payPerMonth - discount));
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
