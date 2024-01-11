// function volume(l,b,h){
//     let vol=l*b*h
//     return vol
// }

// console.log(volume(10,20,30))


// function volume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length*breadth*height;
//         }
//     }
// }
// let fn1=volume(10)
// let fn2=fn1(20)
// let fn3=fn2(30)

// console.log(fn3)

// by using curring invoke directly
// let fn1=volume(10)(20)(30)
// console.log(fn1)

// multiple times changing the values
// let newvolume=volume(10)
// newvolume(15)(10)
// newvolume(12)(20)
// newvolume(14)(30)
// let vol=volume(10)(20)(30)
// console.log(vol)

// student task

// function find(val1,val2){
//     return val1+val2
// }

// let val=find(10,20)
// console.log(val)

// convert above example into currying
// function find(val1){
//     return function find(val2){
//         return val1+val2
//     } 
// }

// let val=find(10)(20)
// console.log(val)

// 10 boxes of same length but breadth and height is changing

// function volume(length,breadth,height){
//     return length*breadth*height
// }
// let length=10
// volume(10,22,33)
// volume(10,12,13)
// volume(10,32,17)
// console.log(volume(10,20,30))

// -----------------------------using currying function-----------------------
// function volume(length) {
//     return function (breadth) {
//         return function (height) {
//             console.log(length*breadth*height);
//         }
//     }
// }
// let newvolume=volume(10)
// newvolume(15)(10)
// newvolume(12)(20)
// newvolume(14)(30)

// advantage of modularity and resusable

// example:
// function find(val1){
//     return function (val2){
//         return function (val3){
//             return val1+val2+val3
//         }
//     } 
// }
// let sumwith5=find(5)
// console.log(sumwith5(2)(3))

// convert into arrow function
//  let sum=(val1)=>{
//    return (val2)=>{
//     return (val3)=>{
//         return val1+val2+val3
//     }
//    }
//  }
//  convert into single line of code by remove the return, if only parameter is there remove the braces

// let sum=val1 => val2=> val3 => val1+val2+val3

// student task:
//  let multiply=(val1)=>{
//    return (val2)=>{
//     return (val3)=>{
//         return val1*val2*val3
//     }
//    }
//  }
// convert into currying into arrow function:
// let multiple=val1=>val2=>val3=>val1*val2*val3
// multiple(10)(20)(30)


// Infinity parmaters are passing into the function
// example:
// function find(val1){
//     return function (val2){
//        if(val2){
//         return find(val1+val2)
//        }
//        return val1;
//     } 
// }

// console.log(find(1)(2)())
// console.log(find(1)(2)(3)())
// console.log(find(1)(2)(3)(4)())

