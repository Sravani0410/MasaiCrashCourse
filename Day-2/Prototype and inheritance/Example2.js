// In every javascript function has prototype Property and type of prototype is object

person.prototype.age=40;
person.prototype.sayAge=()=>{
    console.log("saying Age...")
}
function person(){

}
engineer.prototype.salary=100;
engineer.prototype.saySalary=()=>{
    console.log("saying salary")
}
function engineer(){

}
Object.setPrototypeOf(engineer.prototype,person.prototype)

let worker={
    job:"Engineer",
    work:function(){
        console.log("Working as an Engineer")
    }
}
Object.setPrototypeOf(worker,engineer.prototype)

worker.work();
worker.saySalary();
worker.sayAge();