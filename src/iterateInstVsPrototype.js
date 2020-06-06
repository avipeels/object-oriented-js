function Circle(radius) {
    this.radius = radius;
    this.move = function () {
        console.log('move');
    }
}

const c1 = new Circle(1);
Circle.prototype.draw = function () {
    console.log('draw');
}

//return instance members only
console.log(Object.keys(c1));
//return instance and prototype members
for (const key in c1) {
    console.log(key);
}