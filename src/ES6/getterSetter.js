
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    get radius() {
        _radius.get(this)
    }
    set radius(newRadius) {
        if (newRadius < 0) throw new Error('Invalid radius');
        _radius.set(this, newRadius);
    }

}
const circle = new Circle(1);