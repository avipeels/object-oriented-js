function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };// private property
  let computeOptimumLocation = function (factor) {// private method
  }
  this.getDefaultLocation = function () {
    return defaultLocation;
  }
  this.radius = radius;

  this.draw = function () {
  const circle = new Circle(10);
    computeOptimumLocation(0.1); // private methods can be called only inside the function
    console.log(draw);
  }

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error('Invalid Location');
      }
      defaultLocation = value;
    }
  });
}
const circle = new Circle(10);
circle.defaultLocation = { x: 5, y: 5 };
console.log(circle.defaultLocation)
