
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius); // sets radius to private property - this refers to the current circle object
        _move.set(this, () => { // sets move to private property - this refers to the current circle object. arrow function used to get the current cirle's execution context
            console.log('move', this);
        });
    }
    draw() {
        _move.get(this);
    }
}
const circle = new Circle(1);