class Shape {
    constructor(color) { // common props can go to parent
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius; // additional props can go in children
    }
    draw() {
        console.log('draw');
    }
}

const circle = new Circle('red', 1); // can invoke with all props be it in parent or child
console.log(circle);