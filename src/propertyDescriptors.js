let person = { name: 'Avinash' };
Object.defineProperty(person, 'name', {
    writable: false, // update
    enumerable: false, // enumerable
    configurable: false, // delete
});
person.name = 'Avi';
delete person.name;
console.log(person.name);
console.log(Object.keys(person));