//arguments object -- no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1, 1001));

//this keyword -- no longer bound

const user = {
  name: 'Brendan',
  cities: ['San Diego', 'Berkeley', 'Hangzhou'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city + '.');
  }
};

console.log(user.printPlacesLived());

//Challenge Area

const multiplier = {
  numbers: [3, 1, 8, 7],
  multiplyBy: 9,
  multiply() {
    return this.numbers.map((x) => this.multiplyBy * x);
  }
};

console.log(multiplier.multiply());