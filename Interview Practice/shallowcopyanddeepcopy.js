// shallow copy:
// ==============

//  let arr1=[9,90,80]
//  let arr2=arr1
//  console.log(arr2) // same as arr1=[9,90,80], arr2=[9,90,80]

//  if we want change any index value by using arr2
// arr2[1]=50
// console.log(arr2) // both arr1 and arr2 will change,arr1 =[9,50,80] ,arr2=[9,50,80]

// if we want to change arr2 wiothout changing the arr1

// Deep Copy:
// =========

//  we have 2 methods:
// 1st method: using Object.assign
// let obj1={
//     name:"sravani",
//     age:27
// }
// 1st method: using Object.assign
// let obj2= Object.assign({},obj1)
// 2nd method : using object destruturing
// let obj2= {...obj1}
// obj2.age=28
// console.log(obj1)
// console.log(obj2)

let arr1=[9,90,80]
// let arr2=[...arr1]
let arr2=arr1.slice()
arr2[1]=50
console.log(arr1)
console.log(arr2)