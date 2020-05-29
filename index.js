function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
}


// const circle = {
//     radius: 1,
//     location: {
//         x: 1, y: 2
//     },
// }
const circle = createCircle(1);
circle.draw();