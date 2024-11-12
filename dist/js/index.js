"use strict";
//tipos: string, boolean, number...
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 16;
console.log(x);
//inferencia x annotation
let y = 12; // <-- inferencia
//y = teste;
let z = 12; // <-- annotation
// tipos basicos
let firstName = 'Monique';
let age = 23;
const isAdmin = true;
console.log(typeof firstName);
firstName = 'Cristine';
console.log(firstName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
// tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// object literals -> {prop: value}
const user = {
    name: "Monique",
    age: 24
};
console.log(user);
console.log(user.name);
// não é possivel alterar o dado acima
//any
let a = 0;
a = true;
a = [];
//um recurso não muito recomendado pois é quando nenhum tipo de dado aceita ou quando vai usar mais de um tipo
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "0001";
const shirId = 123;
// enum
//tamanho de roupas, não quero escrever
//size: medio, size: pequeno, size: grande
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
//literal types
let teste;
teste = "algumvalor";
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Monique"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Monique");
greeting("Monique", "sir");
function sumNumber(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumber({ n1: 7, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 3,
    n2: 5
};
console.log(multiplyNumbers(someNumbers));
// narrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Função do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const monique = new User("Monique", "Admin", true);
console.log(monique);
monique.showUserName();
monique.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("Mitsubishi", 4);
fusca.showBrand();
//herança
class superCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new superCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
//decorators
//constructor decorator
function baseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParameters()
], Person);
const mona = new Person("Mona");
console.log(mona);
