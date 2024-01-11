// Method1:
// function Outer(){
//     let val=10
//     function inner(){
//       val++;
//       return val
//     }
//     return inner
// }
// let ans=Outer()
// let a=ans()  // closure
// console.log(a)

// Method2:
// function Outer(){
//     let val=10
//     function inner(){
//       val++;
//       console.log(val)
//     }
//     return inner
// }
// let ans=Outer()
// ans() //11
// ans()  //12
// ans()  //13
// let ans1=Outer()
// ans1()  //1

// interview question:

// for(var i=0;i<3;i++){
//   setTimeout(()=>{
//      console.log(i)
//   },500)
// }
/* output:3 3 3
explaination: why 3 eventhough running te loop
because: here var is function scope so whenever console.log in settimeout--> it is a webAPI -->callback queue(timer queue)
          which is synchronous code and for loop also synchronous code        
*/


for(let i=0;i<3;i++){
  setTimeout(()=>{
     console.log(i)
  },500)
}
/*output:0 1 2
expalniation: here let is block scope
here it one kind of closure is formed 
explain: whenver loop is running for every loop it forms closure i.e., 0--> 1st closure, 1--->2nd closure,2--->3rd closure
          call the closure's are placed in callback queue
          here loop is synchronous but settimeout is asynchronous code, it will handed over to webAPI.
          while handed overe it will form 1st closure in this retaining value of i=0 and callback fucntion consists consol.log(i)-->output 1
          loop is running upto 3 --> it will form 2nd closure in this retaining value of i=1 and callback fucntion consists consol.log(i)-->output 2
          loop is running upto 3 --> it will form 3rd closure in this retaining value of i=2 and callback fucntion consists consol.log(i)-->output 3
          here one closure to other closure can't access because every individual closure forms in block scope.

*/

