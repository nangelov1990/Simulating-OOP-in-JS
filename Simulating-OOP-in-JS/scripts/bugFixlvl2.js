'use strict';

var Person = (function () {
    function Person(firstName, lastName) {
        var _this = this;

        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.fullName = firstName + " " + lastName;
    }

    Person.prototype.firstName = function(value) {
        if (value) {
            _this._firstName = value;
        } else {
            return _this._firstName;
        }
    }
    
    Person.prototype.lastName = function (value) {
        if (value) {
            _this._lastName = value;
        } else {
            return _this._lastName;
        }
    }
    
    Person.prototype.fullName = function (value) {
        var fullNameString;
        if (value) {
            fullNameString = String.split(" ");
            this.firstName = fullNameString[0];
            this.lastName = fullNameString[1];
        } else {
            fullNameString =
                this.firstName +
                " " +
                this.lastName;

            return fullNameString;
        }
    }

    return Person;
})();

var person = new Person("Peter", "Jackson");

person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

