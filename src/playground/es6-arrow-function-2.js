// arguments object no longer bound with arrow functions
// this keyword " " "

const add = (a, b) =>  {
    // console.log(arguments);
    return a+b;
}

console.log(add(44,3));

const user = {
    name: 'User',
    cities: ['city1', 'city2', 'city3'],
    printPlacesLived () {

        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // return cityMessages;
    
    }
};

// user.printPlacesLived();
console.log(user.printPlacesLived());

// challenge

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 4,
    multiply () {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());