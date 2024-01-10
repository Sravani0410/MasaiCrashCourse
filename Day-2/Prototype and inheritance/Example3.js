Animal.prototype.sleep=()=>{
    console.log("sleeping!")
}
function Animal(){

}
function Dog(){
// create a chain from Dog to Animal
// in code formate
}
Object.setPrototypeOf(Dog.prototype,Animal.prototype)

let pet ={
    name:"Tommy"
}

Object.setPrototypeOf(pet,Dog.prototype)
pet.sleep()  //sleeping!

// explain the prototype to the instructor:
//  There is a object called pet  
//   there is prototype chain between pet and Dog function and this dog function is hidden prototype chain.
//  it is free function from javascript.
// and one more prototype chain between dog.prototype and animal.prototype.