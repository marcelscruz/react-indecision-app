var nameVar = 'Marcel';
var nameVar = 'Cruz';
console.log('nameVar', nameVar);

let nameLet = 'Let';
nameLet = 'Let2';
console.log('nameLet', nameLet);

const nameConst = 'Const';
console.log('nameConst', nameConst);

// function scope

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

// block scope

const fullName = 'Marcel Cruz';

if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

// it won't run because let and const are block level scope
// console.log(firstName);
