// "use strict"

console.log("Value of this in Global:", this);

function func() {
    console.log("Value of this in Global Function: ", this);
}
func();

const user = {
    firstName: "Nirbhay",
    lastName: "Marde",

    func() {
        console.log(this);
    }
}
user.func();

const obj = {
    func: function () {
        function innerFunc() {
            console.log("Value of this in innerFunction:", this);

        }
        innerFunc();
    }
}
obj.func();

function ConstructorFunction() {
    this.a = 100;
    this.b = 200;

    console.log(this);
}
const obj1 = new ConstructorFunction();

const h1 = document.querySelector("h1");
h1.addEventListener("click", function (event) {
    console.log("Value of this in event handler function:", this);
});

const func1 = () => {
    console.log("Value of this inside arrow function:", this);
}
func1();

const object = {
    name: "Object",

    func: function () {
        setTimeout(() => {
            console.log(this);
        }, 500)
    }

}
object.func();

class MyClass {
    constructor() {
        console.log("Value of this inside a class:", this);
    }
}
const myObj = new MyClass();