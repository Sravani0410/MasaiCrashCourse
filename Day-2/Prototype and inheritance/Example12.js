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
// convert to function to class

class createPerson{
    constructor(firstname,lastname,age){
      this.firstname=firstname;
      this.lastname=lastname;
      this.age=age;
      }
      increaseAge(){
        //   return this.age+1;
        this.age=this.age+1
        console.log("Increased by Age...")
        }
        eat(){
            console.log("eating...")
        }
      
}

    class createEmployee extends createPerson{
         constructor(firstname,lastname,age,salary){
           super(firstname,lastname,age)
            this.salary=salary
        }
        work(){
            console.log("working")
        }
        increseSalary(amt){
            this.salary=this.salary+amt
            console.log("Increased Salary....")
        }
    }


    let emp1=new createEmployee("Sravani","Pyla",25,50000)
    emp1.increaseAge();
    console.log(emp1)
  
    