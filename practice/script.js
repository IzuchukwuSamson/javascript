const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';
let myButton = document.querySelector('button');

function setUsername() {
  let myName = prompt('Please Enter your username');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'The name is set as' + myName;

  if (!myName) {
    setUsername();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
}

if (localStorage.getItem('name')) {
  setUsername();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUsername();
};
// let iceCream = 'chocolate';
// switch (iceCream) {
//   case 'chocolate':
//     alert('yayy its ice cream');
//     break;

//   default:
//     alert('Nothing');
//     break;
// }

// function number(num1, num2) {
//   let myNumber = num1 * num2;
//   return myNumber;
// }

// console.log(number(2, 3));
// console.log(number(12, 12.3));

const myImage = document.querySelector('img');
// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute('src');
//   switch (mySrc) {
//     case mySrc === 'images/firefox-icon.png':
//       myImage.setAttribute('src', 'images/user-1.jpg');
//       break;

//     default:
//       myImage.setAttribute('src', 'images/user-3.jpg');
//       break;
//   }
// };

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/user-1.jpg');
  } else {
    myImage.setAttribute('src', 'images/user-3.jpg');
  }
};
