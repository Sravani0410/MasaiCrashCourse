function personCreator(firstName,lastName,age){
    let obj={
    
    }
    
    obj.firstname=firstName;
    obj.lastname=lastName;
    obj.age=age;
    return obj;
}

function employeeCreator(firstName,lastName,age,department,salary){
    // let obj={

    // }
    // obj.firstName=firstName;
    // obj.lastName=lastName;
    // obj.age=age;
    let obj=personCreator(firstName,lastName,age)
    obj.department=department;
    obj.salary=salary;
    return obj;
}
// Object.setPrototypeOf(personCreator.prototype,employeeCreator.prototype)

let emp1=employeeCreator("John","Wilson",25,"Sales",10000)
console.log(emp1)
