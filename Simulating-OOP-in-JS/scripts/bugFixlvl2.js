'use strict';

var Person = (function () {
    function Person(firstName, lastName) {
        //this._firstName = firstName;
        //this._lastName = lastName;
        //this._fullName = firstName + " " + lastName;

        //this.firstName(this._firstName);
        //this.lastName(this._lastName);
        //this.fullName(this._fullName);

        this.firstName(firstName);
        this.lastName(lastName);
        this.fullName(firstName + " " + lastName);
    }

    Person.prototype.firstName = function(value) {
        if (value) {
            this._firstName = value;
        } else {
            return this._firstName;
        }
    }
    
    Person.prototype.lastName = function (value) {
        if (value) {
            this._lastName = value;
        } else {
            return this._lastName;
        }
    }
    
    Person.prototype.fullName = function (value) {
        var fullNameString;
        if (value) {
            fullNameString = value.split(" ");
            this.firstName(fullNameString[0]);
            this.lastName(fullNameString[1]);
        } else {
            fullNameString =
                this._firstName +
                " " +
                this._lastName;

            return fullNameString;
        }
    }

    return Person;
})();

var person = new Person("Peter", "Jackson");

person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName());
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName());

// Changing the full name should work too
//person.fullName = "Alan Marcus";
//console.log(person.fullName);
//console.log(person.firstName());
//console.log(person.lastName());

