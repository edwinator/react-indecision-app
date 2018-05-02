class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
        // console.log('name', this.name);
    }
    getGreeting() {
        return `Hi I am ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old..`
    }

}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
        // console.log('name', this.name);
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` their major is ${this.major}.`
        } 

        return description;
    }

}
class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
        // console.log('name', this.name);
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting += ` I'm visiting from ${this.location}.`
        } 

        return greeting;
    }

}

// const me = new Student('Edwin V', 56, 'Biology');
const me = new Traveler('Edwin V', 56, 'Guam');
console.log(me);
// console.log(me.hasMajor());
// console.log(me.getDescription());
console.log(me.getGreeting());

// const other = new Student();
const other = new Traveler();
console.log(other);
// console.log(other.hasMajor());
// console.log(other.getDescription());
console.log(other.getGreeting());