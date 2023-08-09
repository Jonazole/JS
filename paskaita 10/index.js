const person = {
    age: 26,
    name: "Rima",
    car: {make: "BMW",
    year: 2000,
    },
    sayGodbye: function () {
        console.log(this.name);
    },
}

console.log(person.age);
person.age = 40;
console.log(person.age);
delete person.age;
person.lastName = "Pavarde"

class Person {
constructor(name, age){
console.log(name,age);

}
sayGodbye() {
    console.log("bye");
}
}

const marius = new Person('Marius', 26);
console.log(marius);
marius.sayGodbye();