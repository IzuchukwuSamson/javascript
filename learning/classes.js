// const bigDay = new Date(2024, 6, 19);
// console.log(bigDay.toLocaleDateString());
// if (bigDay.getTime() < Date.now()) {
//   console.log('Once upon a time...');
// } else {
//   console.log('Sometime in the future');
// }

//  Instance properties --- what they have
//  Instance Methods ---- what they do
class Rectangle {
  // constructor is ran only once when the object is created, ie it is used to setup the object
  constructor(_width, _height, _color) {
    console.log('The rectangle has been created');
    this.width = _width;
    this.heigth = _height;
    this.color = _color;
  }

  getAea() {
    return this.width * this.heigth;
  }

  printDescription() {
    console.log(
      `I am a rectangle of ${this.width * this.heigth}  and i am ${
        this.color
      } in color`
    );
  }
}

// let myRectangle = new Rectangle(2, 3, 'red');
// let myRectangle2 = new Rectangle(10, 5, 'yellow');

// console.log(myRectangle.getAea());
// console.log(myRectangle2.getAea());
// // console.log(myRectangle.printDescription());
// myRectangle2.printDescription();

// getters and setters
class Square {
  constructor(_width) {
    this.width = _width;
    this.heigth = _width;
    this.numberOfRequestForArea = 0;
  }

  // getter
  get area() {
    this.numberOfRequestForArea++;
    return this.width * this.heigth;
  }

  // setter
  set area(theArea) {
    this.width = Math.sqrt(theArea);
    this.heigth = this.width;
  }
}

// let square = new Square(4);
// console.log(square.area);
// square.area = 25;

// // console.log(square.width);
// console.log(square.area);
// console.log(square.area);
// console.log(square.area);
// console.log(square.area);
// console.log(square.numberOfRequestForArea);

//////////////////
// Static Methods
/** Static methods are like helper functions */

class Square2 {
  constructor(_width) {
    this.width = _width;
    this.heigth = _width;
  }

  static equals(a, b) {
    return a.width * a.heigth === b.width * b.heigth;
  }
}

let square1 = new Square2(8);
let square2 = new Square2(8);
// console.log(square1);
console.log(Square2.equals(square1, square2));
// console.log(Square2.equals(square1, square2));
