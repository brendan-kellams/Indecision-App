var nameVar = 'Brendan';
nameVar = 'JT';
console.log('nameVar', nameVar);

let nameLet = 'Bob';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Hal';
  return petName;
}

var fullName = 'Brendan Kellams';

if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);