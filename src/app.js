class Vehicle {
    constructor() {
        console.log('construction vehicle');
    }
}

class drone extends Vehicle {

}

class Car extends Vehicle {

}

let c = new Car();

console.log(c instanceof Vehicle);