/*
createPerson
|
|-Firstname
|-lastname
|-age
|-increaseAge() //increases this.age by 1
|-eat() //console.log "eating..."

   |
   |(inheritance)

createEmployee
|
|-salary
|-work() //console.log "working"
|-IncreaseSalary(amt) //increases this.salary by amt

properties are usually se per instance but 
methods should added to the prototype for efficient sharing across instances.

*/

// 1. <attach increaseAge() and eat() to createPerson's prototype object>

createPerson.prototype.increaseAge=function(){
//   return this.age+1;
this.age=this.age+1
console.log("Increased by Age...")
}
createPerson.prototype.eat=function(){
    console.log("eating...")
}
function createPerson(firstname,lastname,age){
  let obj={}
//   2.<create a prototype chain between this object and createPerson.prototype>
Object.setPrototypeOf(obj,createPerson.prototype)
obj.firstname=firstname;
obj.lastname=lastname;
obj.age=age;
return obj;
}

// 5.<create a chain between createEmployee.prototype and createPerson.prototype>
Object.setPrototypeOf(createEmployee.prototype,createPerson.prototype)

// 3.<attach work() and increseSalary() to prototype object of createEmployee>
createEmployee.prototype.work=function(){
    console.log("working")
}
createEmployee.prototype.increseSalary=function(amt){
    // return +this.salary+amt;
    this.salary=this.salary+amt
    console.log("Increased Salary....")
}
function createEmployee(firstname,lastname,age,salary){
    let obj=createPerson(firstname,lastname,age)

    // 4.create a chain between obj and createEmployee.prototype
    Object.setPrototypeOf(obj,createEmployee.prototype)
    obj.salary=salary
    return obj;
}
let emp1=createEmployee("Sravani","Pyla",25,50000)
emp1.increaseAge();
console.log(emp1)
// console.log(emp1.increaseAge())
// console.log(emp1.increseSalary(100))

// console.log(emp1)
