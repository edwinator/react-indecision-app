var nameVar = 'andy';
console.log('nameVar', nameVar);

let nameLet = 'Jeff';
console.log('nameLet',nameLet)

const nameConst = 'Jeff';
console.log('nameConst',nameConst);

// block scoping
var fullName = 'full name';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log('firstName', firstName);
}