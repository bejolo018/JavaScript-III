/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the value of the this keyword is the window object
* 2. Implicit binding happens when a function is invoked, whatever is left of the dot is what the this keyword is referencing.
* 3. Explicit binding is when we use call, apply, or bind, to explicitly tell what they keyword is going to be in a function
* 4. New binding creates a new object and save it as this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function scramble(eggs){
    console.log(this)
    return eggs
}

scramble("Omelet");

// Principle 2

// code example for Implicit Binding

const guitar = {
    brand: "Fender",
    color: "red",
    type: "electric",
    quality: function (){
        return `This ${this.type} ${this.brand} is high quality!`
    }
}

guitar.quality();


// Principle 3

// code example for New Binding

var Homes = function(color, size){
    this.color = color;
    this.size = size;
}

var mansion = new homes('red', 'large')

// Principle 4

// code example for Explicit Binding

var sayName = function(phone1, phone2){
    console.log(`My name is ${this.name} and the latest smartphones are the ${phone1}, and the ${phone2}!`)
  };
  
  var stacey ={
    name: 'Benjamin',
    age: 19
  };
  
  var languages = ['IPhone X', 'Samsung Galaxy S10'];
  
  sayName.apply(stacey, languages)