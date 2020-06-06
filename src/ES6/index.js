// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//       console.log(draw);
//     }
//   }

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {
            console.log('move');
        }
    }
    draw() {
        console.log('draw');
    }
    static parse(str) {// static methods are used to create utility functions like Math.....
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c1 = Circle.parse('{"radius": 1}')
console.log(c1);