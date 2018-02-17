// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 11));

// this keyword - no longer bound

const user = {
  name: 'Marcel',
  cities: ['Pelotas', 'Dublin'],
  // printPlacesLived: function () {
  // new es6 method syntax
  printPlacesLived() {
    // map allows to create a new array
    return this.cities.map((city) => this.name + ' has lived in ' + city + '!');

    // console.log(this.name);
    // console.log(this.cities);

    // won't work, this.name is in a higher scope
    // this.cities.forEach(function (city) {
    //   console.log(this.name + ' has lived in ' + city);
    // });

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  // number - array of numbers
  numbers: [2, 3, 4],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
  // multiplyBy - single number
  // multiply - return a new array where the number have been multiplied
};

console.log(multiplier.multiply());
