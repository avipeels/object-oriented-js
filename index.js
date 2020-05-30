//Constructor function
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log(this.radius);
    }
}

const circle = new Circle(1);
circle.draw();

// Factory function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     }
// }

// const circle = createCircle(1);

// Object Literal

// const circle = {
//     radius: 1,
//     location: {
//         x: 1, y: 2
//     },
// }
// circle.draw();