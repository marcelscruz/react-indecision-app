// var is function scope

var nameVar = 'Marcel';
var nameVar = 'Cruz';
console.log('nameVar', nameVar);

// let and const are block scope (includes function)

let nameLet = 'Let';
nameLet = 'Let2';
console.log('nameLet', nameLet);

const nameConst = 'Const';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Aika';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Marcel Cruz';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  let lastName = fullName.split(' ')[1];
  console.log(firstName);
  console.log(lastName);
}

// will work
console.log(firstName);

// won't work
console.log(lastName);
