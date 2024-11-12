//tipos: string, boolean, number...

let x: number = 10;
x = 16;
console.log(x);

//inferencia x annotation

let y = 12; // <-- inferencia
//y = teste;
let z:number = 12; // <-- annotation

// tipos basicos

let firstName: string = 'Monique';
let age: number = 23;
const isAdmin: boolean = true;

console.log(typeof firstName);
firstName = 'Cristine';
console.log(firstName);

//object

const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);

// tuplas

let myTuple: [number, string, string[]];
myTuple= [5, "teste", ["a", "b"]];

// object literals -> {prop: value}

const user:{name: string, age: number} = {
    name: "Monique",
    age: 24
};

console.log(user);
console.log(user.name);
// não é possivel alterar o dado acima

//any

let a: any = 0;
a = true;
a = [];
//um recurso não muito recomendado pois é quando nenhum tipo de dado aceita ou quando vai usar mais de um tipo

// union type

let id: string | number | boolean = "10";
id = 200;
// esse sim para utilizar com 2 tipos de funções

//type alias

type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "0001";
const shirId: myIdType = 123;

// enum
//tamanho de roupas, não quero escrever
//size: medio, size: pequeno, size: grande

enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
};

console.log(camisa);

//literal types

let teste: "algumvalor";
teste = "algumvalor";

//funções

function sum(a: number,b: number){
    return a + b;
}

console.log(sum(12,12));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Monique"));

function logger(msg: string){
    console.log(msg)
}

logger ("Teste");

function greeting(name: string, greet?: string){
    if(greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("Monique");
greeting("Monique", "sir");


//interfaces

interface MathFunctionParams{
    n1: number,
    n2: number
}

function sumNumber(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumber({n1:7, n2:2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const someNumbers:MathFunctionParams = {
    n1: 3,
    n2: 5
}

console.log(multiplyNumbers(someNumbers));


// narrowing
//checagem de tipos

function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
    return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

//generics

function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

//classes

class User{
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean){
        if(canShow){
            console.log(`Função do usuário é: ${this.role}`)
            return;
        }
        console.log("Informação restrita!");
    }
}

const monique = new User("Monique", "Admin", true);
console.log(monique);
monique.showUserName();
monique.showUserRole(false);

//interfaces em classes

interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);

    }
}

const fusca = new Car ("Mitsubishi", 4);
fusca.showBrand();

//herança

class superCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new superCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

//decorators
//constructor decorator

function baseParameters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
            return class extends constructor{
                id = Math.random();
                createdAt = new Date();
            };
    }
}

@baseParameters()
class Person {
    name

    constructor(name: string){
        this.name = name;
    }
}

const mona = new Person("Mona");
console.log(mona);

