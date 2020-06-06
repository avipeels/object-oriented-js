function Circle(radius) {
    this.radius = radius;
}
const circle = new Circle(1);


console.log(Object.getPrototypeOf(circle));// returns parent of circle which is Circle

console.log(circle.__proto__);
console.log(Circle.prototype) // This is the parent of the objects created by Circle constructor

let obj = {}; // equal to new Object();
console.log(obj.__proto__);
console.log(Object.prototype);

let array = [];
console.log(array.__proto__);
console.log(Array.prototype);
