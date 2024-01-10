// example1:

// function Person(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
// }

// function Employee(firstName,lastName,age,department,salary){
//     // this.firstName=firstName;
//     // this.lastName=lastName;
//     // this.age=age;
//     Person.call(this,firstName,lastName,age)
//     this.department=department;
//     this.salary=salary;
// }

// let empl1=new Employee("John","Wilson",25,"Sales",10000)
// console.log(empl1)

// example2:

function IPhone1(Id,color,display,weight){
    this.Id=Id;
    this.color=color;
    this.display=display;
    this.weight=weight;

}

function IPhone2(Id,color,display,weight,bluetooth,internet,camera){

    IPhone1.call(this,Id,color,display,weight)
    this.bluetooth=bluetooth;
    this.internet=internet;
    this.camera=camera;
}

let ipobj=new IPhone2(1,"black","128GB",1000,"1.0","2g","1.0 MP")
console.log(ipobj)