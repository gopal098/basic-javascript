class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    incrementAge() {
        this.age += 1;
    }
}

let firstName = prompt("Enter first name:");
let lastName = prompt("Enter last name:");
let age = parseInt(prompt("Enter age:"));

let person = new Person(firstName, lastName, age);
console.log("Full Name:", person.getFullName());
person.incrementAge();
console.log("New Age:", person.age);
