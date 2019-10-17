/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding: binding of 'this' is to the object before the '.dot' of the function that called it

* 2. explicit binding: binding of 'this' is set using .call, .apply, .bind to the argument passed into one of the mentioned functions

* 3. new binding: binding of 'this' is set to the specific object created using the constructor function

* 4. window binding: binding of 'this' will be set to the 'window' when no other context is provided from the other 3 rules or when in a global scope
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    greet: function (name) {
        console.log(`Hello my name is ${name}`);
    }
};
myObj.greet('Robby');


// Principle 3

// code example for New Binding

const Fruit = function (color, name) {
    this.color = color;
    this.name = name;
}

let banana = new Fruit('yellow', 'banana');

// Principle 4

// code example for Explicit Binding

const describeSelf = function () {
    console.log(`I am a ${this.name}`);
};

const apple = {
    name: 'apple',
    color: 'green'
};

describeSelf.call(apple);