// we can create prototype chain between 2 objects using setPrototype()
// Example1
let user={
    name:"Sravani",
    sayHello:function(){
        console.log("Hello")
    }
}
let workInfo={
    salary:10000,
    work:function(){
        console.log("Working")
    }
}
Object.setPrototypeOf(workInfo,user) // by using this we will make the chain means workinfo will access to sayHello
// workInfo.work() // working
// workInfo.sayHello() //undefined
// if we want work  workInfo.sayHello() for that we have to give chain by using prototype

// prototype and inheritance --> in every object there is a hidden __proto is available
console.log(workInfo.__proto__) 

// Example2
let animal={
    sleep:function(){
        console.log("Zzzz....")
    }
}
let dog={
    bark:function(){
        console.log("Woof!")
    }
}
Object.setPrototypeOf(dog,animal)
dog.sleep()
dog.bark()

// what about the functions?
// refer the Example2.js