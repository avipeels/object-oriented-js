function Circle(radius) {
    this.radius = radius; // Instance members
}


/**
 * Instead of creating 100000 object copies of draw function we can directly create draw function on Circle prototype
 */

Circle.prototype.draw = function () { // Protoype members
    console.log('draw');
}
const c1 = new Circle(1);
const c2 = new Circle(2);

c1.draw(); // Circle { radius: 1, draw: [Function] }
console.log(c2); // Circle { radius: 2, draw: [Function] }


/**
 * Overwrite the existing functions in Prototype
 */
Circle.prototype.toString = function () {
    return `Circle with radius ${this.radius}`;
}

console.log(c1.toString());