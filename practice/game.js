// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Now help Annalyn free her best friend!

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
let knightIsAwake = true;
let archerIsAwake = true;
let prisonerIsAwake = false;
export function canExecuteFastAttack(knightIsAwake) {
  // throw new Error('Remove this line and implement the function');
  switch (true) {
    case knightIsAwake === true:
      return false;

    default:
      return true;
  }
}
canExecuteFastAttack(knightIsAwake);

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  // throw new Error('Remove this line and implement the function');
  switch (true) {
    case knightIsAwake === false &&
      archerIsAwake === true &&
      prisonerIsAwake === true:
      return true;
    case knightIsAwake === false &&
      archerIsAwake === false &&
      prisonerIsAwake === true:
      return true;
    case knightIsAwake === false &&
      archerIsAwake === true &&
      prisonerIsAwake === false:
      return true;
    case knightIsAwake === true &&
      archerIsAwake === false &&
      prisonerIsAwake === false:
      return true;
    case knightIsAwake === true &&
      archerIsAwake === false &&
      prisonerIsAwake === true:
      return true;
    case knightIsAwake === true &&
      archerIsAwake === true &&
      prisonerIsAwake === true:
      return true;

    default:
      return false;
  }
}
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
archerIsAwake = false;
prisonerIsAwake = true;
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  // throw new Error('Remove this line and implement the function');
  switch (true) {
    case archerIsAwake === false && prisonerIsAwake === true:
      return true;

    default:
      return false;
  }
}
canSignalPrisoner(archerIsAwake, prisonerIsAwake);

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
let petDogIsPresent = false;
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  switch (true) {
    // 14
    case knightIsAwake === false &&
      archerIsAwake === false &&
      prisonerIsAwake === false &&
      petDogIsPresent === false:
      return false;
    // 15
    case knightIsAwake === false &&
      archerIsAwake === false &&
      prisonerIsAwake === false &&
      petDogIsPresent === true:
      return true;
    // 16
    case knightIsAwake === false &&
      archerIsAwake === false &&
      prisonerIsAwake === true &&
      petDogIsPresent === false:
      return true;
    // 17
    case knightIsAwake === false &&
      archerIsAwake === false &&
      prisonerIsAwake === true &&
      petDogIsPresent === true:
      return true;
    // 18
    case knightIsAwake && archerIsAwake && prisonerIsAwake && petDogIsPresent:
      return false;
    // 19
    case knightIsAwake && archerIsAwake && prisonerIsAwake && !petDogIsPresent:
      return false;
    // 20
    case knightIsAwake && archerIsAwake && !prisonerIsAwake && petDogIsPresent:
      return false;
    // 21
    case knightIsAwake && archerIsAwake && !prisonerIsAwake && !petDogIsPresent:
      return false;
    // 22
    case !knightIsAwake && !archerIsAwake && prisonerIsAwake && petDogIsPresent:
      return false;
    // 23
    case knightIsAwake === true &&
      archerIsAwake === false &&
      prisonerIsAwake === false &&
      petDogIsPresent === true:
      return true;
    // 24
    case !knightIsAwake &&
      !archerIsAwake &&
      !prisonerIsAwake &&
      petDogIsPresent:
      return false;
    // 25
    case knightIsAwake === true &&
      archerIsAwake == false &&
      prisonerIsAwake === true &&
      petDogIsPresent === true:
      return true;
    // 26
    case !knightIsAwake && archerIsAwake && prisonerIsAwake && petDogIsPresent:
      return false;
    // 27
    case !knightIsAwake && archerIsAwake && prisonerIsAwake && !petDogIsPresent:
      return false;
    // 28
    case !knightIsAwake && archerIsAwake && !prisonerIsAwake && petDogIsPresent:
      return false;
    // 29
    case !knightIsAwake &&
      archerIsAwake &&
      !prisonerIsAwake &&
      !petDogIsPresent:
      return false;

    default:
      return false;
  }
}
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
