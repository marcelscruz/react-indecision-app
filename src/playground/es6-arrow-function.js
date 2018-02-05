function square (x) {
  return x * x;
};

console.log(square(2));

const squareArrow = (x) => {
  return x * x;
};

console.log(squareArrow(3));

const squareArrowExpression = (x) => x * x;

console.log(squareArrowExpression(4));

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };
//
// console.log(getFirstName('Marcel Cruz'));


const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Marcel Cruz'));
