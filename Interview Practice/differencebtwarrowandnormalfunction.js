//1. syntax:
// normal function:
    // const myfunction_1=function(){}
// arrow function:
    // const myfunction_2=()=>{}

// 2. return any statement:  in arrow function we can directly return in single line
// const myfunction_1=function(){
//     return 1+2
// }
// const myfunction_2=()=>1+2

// 3."this" keyword only using in normal function because in arrow function "this" indicates the windows object
//    document.getElementById("btn").addEventListener("click",function(){
//     console.log("this",this) // here it will give button
//    })
//    document.getElementById("btn").addEventListener("click",()=>{
//     console.log("this",this) // here window object will give but we want window element
//    })


// 4. "this" keyword in object literals pattern:
     const myObject={
        name:"sravani",
        myFunction:function(){
            console.log(this)
            console.log("My name is", this.name) // My name is sravani
        },
        arrowFunction:()=>{
           console.log(this)
           console.log("My name is", this.name)  //My name is undefined
           console.log("My name is", myObject.name) //My name is sravani
        }
     }
myObject.myFunction()
myObject.arrowFunction()
  