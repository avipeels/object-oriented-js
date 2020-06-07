const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }
    [_draw]() {
        console.log('draw');
    }
    proxyDraw() {
        return _radius;
    }
}

const circle = new Circle(1);
// circle.radius - should not be accessible. So convert it to a Symbol
console.log(circle._radius); // gives you undefined.
console.log(circle.proxyDraw());

//But there is a hack to get the private symbol prop.
const key = Object.getOwnPropertySymbols(circle)[0];
console.log(circle[key]);