'use strict';

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    return {
        name: this.firstName + " " + this.lastName,
        firstName: this.firstName,
        lastName: this.lastName
    };
}

var peter = new Person("Peter", "Jackson");

console.log(peter.name);
printOnWebPage("bugFix", peter.name);

console.log(peter.firstName);
printOnWebPage("bugFix", peter.firstName);

console.log(peter.lastName);
printOnWebPage("bugFix", peter.lastName);

peter.fullName = "asada";
console.log(peter.fullName);
