'use strict';

var Person = (function() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Object.defineProperty(Person.prototype, "fullName", {
        get: function() {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            var fullNameString = value.split(" ");
            this.firstName = fullNameString[0];
            this.lastName = fullNameString[1];
        }
    });

    return Person;
})();

var person = new Person("Peter", "Jackson");

person.firstName = "Michael";
console.log(person.firstName);
printOnWebPage("bugFixLvl2", person.firstName);

console.log(person.fullName);
printOnWebPage("bugFixLvl2", person.fullName);

person.lastName = "Williams";
console.log(person.lastName);
printOnWebPage("bugFixLvl2", person.lastName);

console.log(person.fullName);
printOnWebPage("bugFixLvl2", person.fullName);

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
printOnWebPage("bugFixLvl2", person.fullName);

console.log(person.firstName);
printOnWebPage("bugFixLvl2", person.firstName);

console.log(person.lastName);
printOnWebPage("bugFixLvl2", person.lastName);