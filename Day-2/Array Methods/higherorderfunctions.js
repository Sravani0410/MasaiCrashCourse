/*higher order function:
function a(){

}
  function b(){

  }
  b("hello",a) // a is a argument, it called as callback function this process is called higher order function
above example:
  one function(b) it takes another function(a) as an argument  this is called a higher order function
  here another function is invoke to one function i.e., send as a argument that function is called callback function
  
*/
// example:
   function sum(n1,n2,next){
     let sum=n1+n2
     console.log(next(sum))
   }
   function square(n){
      return n**2
   }
   let x=1;
   let y=2;
   sum(x,y,square)

// ***************************************map*************************************
/*
  it is higher order function
  it iterate each element of array
  it takes callback function which is invoked for each item of the array
  it return the new array
  it doesn't modify existing array
  it is function of an argument
*/
// let arr1=[1,2,3]
// let arr2=arr1.map((item)=>{
//     // return item*2
//     let x=item+2
//     return "One"
// })
// // console.log(arr1)
// console.log(arr2)

// let arr1=[
//     {firstName:"Sravani",lastName:"Pyla"},
//     {firstName:"Sandhya",lastName:"Pyla"},
//     {firstName:"Devi",lastName:"Pyla"}

// ]
// excepted output:["Sravani Pyla","Sandhya Pyla","Devi Pyla"]

// let arr2=arr1.map((item)=>{
// // return item.firstName+" "+item.lastName
// // return `${item.firstName} ${item.lastName}`
// let {firstName,lastName}=item //object destructuring
// return `${firstName} ${lastName}`
// })

// let arr2=arr1.map(({firstName,lastName})=>{
//     return `${firstName} ${lastName}`
// })
// console.log(arr2)

// ****************************************filter*********************************
/*
    it is higher order function
  it iterate each element of array
  it takes callback function which is invoked for each item of the array
  return truthy value -item added to new array
  return falsey value - item will not be added to new 
*/
// let arr1=[
//     {firstName:"Sravani",rollno:1},
//     {firstName:"Sandhya",rollno:2},
//     {firstName:"Devi",rollno:3},
//     {firstName:"Madhu",rollno:4},
//     {firstName:"Kiran",rollno:5},
//     {firstName:"Uma",rollno:6},
//     {firstName:"Lakshmi",rollno:7},
// ]
/* excepted output: people with rollno >3 
    {firstName:"Madhu",rollno:4},
    {firstName:"Kiran",rollno:5},
    {firstName:"Uma",rollno:6},
    {firstName:"Lakshmi",rollno:7},
*/
// let arr2=arr1.filter((item)=>{
//     return item.rollno>3
// //    if(item.rollno>3){
// //     // return true
// //     return item.rollno

// //    }
// //    else{
// //     // return false
// //     return null
// //    }
// })
// console.log(arr2)

// let arr1=[1,3,4,5,6,7,8,9]
// let arr2=arr1.filter((item)=>item<6)
// console.log(arr2)

// **************************************sort**************************************

// let arr1=[
//     {firstName:"Sravani",rollno:1},
//     {firstName:"Sandhya",rollno:2},
//     {firstName:"Devi",rollno:3},
//     {firstName:"Madhu",rollno:4},
//     {firstName:"Kiran",rollno:5},
//     {firstName:"Uma",rollno:6},
//     {firstName:"Lakshmi",rollno:7},
// ]

// let arr2=[1,30,4,500,6,799,8,999]
// excepted:[1,4,6,8,30,500,799,999]
// let arr3=["Kiran","Lakshmi","Madhu","Devi","Sandhya","Sravani","Uma"]
// let x=arr2.sort()
// console.log(x,arr2) //output:[1,30,4,500,6,799,8,999] because dictory order it is taking for that we have to tell

// let x=arr2.sort((a,b)=>{
  //   if(a>b){
  //     return 1
  //   }
  //   if(a<b){
  //     return -1
  //   }
  //   if(a===b){
  // return 0
  //   }
  // insteaded of doing if condition we can directly return a-b
  // return a-b
 
// })
 // only one expression so no need to return statement
//  let x=arr2.sort((a,b)=>a-b)
// console.log(x)

// let arr1=[
//   {firstName:"Sravani",rollno:1},
//   {firstName:"Sandhya",rollno:7},
//   {firstName:"Devi",rollno:3},
//   {firstName:"Madhu",rollno:4},
//   {firstName:"Kiran",rollno:2},
//   {firstName:"Uma",rollno:6},
//   {firstName:"Lakshmi",rollno:5},
// ]

// let x=arr1.sort((a,b)=>a.rollno-b.rollno)
// console.log(x)

// *******************Reduce*************************
// let arr1=[
//   {firstName:"Sravani",score:3},
//   {firstName:"Sandhya",score:7},
//   {firstName:"Devi",score:3},
// ]

// let x=arr1.reduce((acc,item)=>{
  /*
    first iteration : acc:0 //initial value is the acc value 
                      item:{firstName:"Sravani",score:3}
    //whatever you return from here becomes the accumulated valueof the next iteration
       return 0+3=3

  */
//  return acc+item.score
// },0) //initial value
// console.log(x)