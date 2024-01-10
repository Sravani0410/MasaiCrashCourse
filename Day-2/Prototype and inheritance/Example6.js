let thsiObjOfEmployee={
    department:"Sales",
    salary:10000,
    firstName:"Vivek"
}
console.log(thsiObjOfEmployee)

function Person(obj){
    obj.firstName="John"
    obj.lastName="wilson"
    obj.age=25
}
Person(thsiObjOfEmployee)
console.log(thsiObjOfEmployee)
