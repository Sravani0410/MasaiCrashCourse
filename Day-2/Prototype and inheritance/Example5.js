// new way to invoke a function

// example1
// function Introduce(greeting){
// let greet=greeting;
// let name=this.name;
// let age=this.age;
// console.log(`${greet}! I am ${name} & I am ${age} years old.`)
// }

// Introduce.call({name:"Sravani",age:27},"Hi")

// example2

function eat(){
    console.log(`${this.animalType} is eating`)
}
let obj={animalType:"cat"}
eat.call(obj)
