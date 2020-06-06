function Cirle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(draw);
  }
}

const circle = new Cirle(10);
for (var key of circle) {
  console.log(key);
}
