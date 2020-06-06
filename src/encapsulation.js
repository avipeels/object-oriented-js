// let baseSalary = 30000
// let overTime = 10
// let rate = 20
// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overTime * rate)
// }

// wage = getWage(baseSalary, overTime, rate)
// console.log(wage);


let employee = {
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate)
    }
}

const wage = employee.getWage();
console.log(wage);
