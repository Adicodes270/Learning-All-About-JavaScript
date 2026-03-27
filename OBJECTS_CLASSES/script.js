const student = {
    fullName : "Vaidikdevsen",
    marks: 25,
    printMarks : () => {
        console.log("marks =", this.marks)
    }
}

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },

    calctax2 : function() {
        console.log("tax rate is 10%")
    }
}

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%")
    }
}

const karanArjun2 = {
    salary : 50000,
}
const karanArjun3 = {
    salary : 50000,
}
const karanArjun4 = {
    salary : 50000,
}

karanArjun.__proto__ = employee;

karanArjun2.__proto__ = employee;

karanArjun3.__proto__ = employee;

karanArjun4.__proto__ = employee;

karanArjun.calcTax();

class Car {
    constructor(brand) {
        console.log("creating new constructor");
        this.brand = brand;
        this.mileage = this.mileage
    }
    stop() {
        console.log("stop");
    }

    start() {
        console.log("start");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new Car("fortuner");
// fortuner.setBrand("fortuner");

let lexus = new Car();

class Parent {
    hello() {
        console.log("hello")
    }
}

class Child extends Parent {

}

let obj = new Child();

class Person {
    constructor() {
        this.species = species
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name);
        
    }
    work() {
        super.eat()
        console.log("Solve problems, build something")
    }
}

let aditya = new Engineer("chemical engineer");


class User {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Viewing college data")
    }
}

class Admin extends User {
    constructor() {
        super(name,email);
    }

    editData() {
        console.log("Editing college data")
    }
}