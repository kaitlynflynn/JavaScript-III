/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* It's a pointer that points to an object
* 1. Window/Global Object Binding - Meaning in global scope, the window/console object is 'this'
* 2. Implicit Binding - The object before the dot is 'this'
* 3. Explicit Binding - Explicitly defined when JavaScript's 'call' or 'apply' method is used
* 4. New Binding - Refers to specific instance of an object when a constructor function is used
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName('Kaitlyn');

// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Kaitlyn');

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = 'greeter';
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const clementine = new CordialPerson('Comrade');
const comrade = new CordialPerson('Clementine');

clementine.speak();
comrade.speak();

// Principle 4
// code example for Explicit Binding
clementine.speak.call(comrade);
comrade.speak.apply(clementine);