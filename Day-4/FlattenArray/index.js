// let arr=[1,[2,[3]],[4,[5,[6,[7]]]]]
// output:[1,2,3,4,5,6,7]

// example1:
let arr=[1,[2,3,[4,5]],[6,7,[8,9]]];
// inbuilt function: we have to pass flat to degree of the array. if we do.t know the degree we can pass infinity bu default
// console.log(arr.flat(2))
// console.log(arr.flat(Infinity))

// Task : using reduce and foreach implement the flat array
// using recursion:
function Flat(arr){
    let ans=[]
    for(let i=0;i<arr.length;i++){
        // if we want check weather array or not.we have one static method is present in the constructor that method is called isArray
        if(!Array.isArray(arr[i])){
          ans.push(arr[i])
        }
        else{
            let ans1= Flat(arr[i]) //[2,3,4,5]
            // ans=ans.concat(ans1) // to join [1] and [2,3,[4,5]] ==> [1,2,3,4,5]
            // using spread operator
            ans=[...ans,...ans1]
        }
    }
    return ans
}
console.log(Flat(arr))
/*
Dry run the code:
1. first the function excution context is created in stack // gobal execution is already present
2. function code is execution context
3. in creation phase let ans=[] it is empty initianlly 
4. loop is running 1 is not in the array so i will move to ans array // ans=[1]
5. pointer is move to next line again run the loop but now it is not number becuase [2,3,[4,5]]
6  so it will go to else and here by using recursion concept again we calling the function //[2,3,[4,5]]
    follow 2,3,4 steps
    again run the for loop untill without array value: check the if and move the 2 to the ans array, and convert ans1 using concat or spread //ans=[ ],ans1=[2] to join ans and ans1==>ans=[2]
                                                       check the if and move the 3 to the ans array, and convert ans1 using concat or spread //ans=[2],ans1=[3] to join ans and ans1==>ans=[2,3]
                                                       check the if it is not satisfied becuase [4,5] 
                                                       check in else again using recursion call the function [4,5]  is again array follow 2,3,4 steps
                                                      check the if and move the 4 to the ans array, and convert ans1 using concat or spread //ans=[],ans1=[4] to join ans and ans1==>ans=[4]
                                                       check the if and move the 5 to the ans array, and convert ans1 using concat or spread //ans=[4],ans1=[5] to join ans and ans1==>ans=[4,5] 
                                                        nothing is there so give this output  [4,5] to previous invoke function then it will  remove exceution context out of the stack and convert ans1 using concat or spreadi.e., [2,3][4,5] ==>[2,3,4,5]
                                                        nothing is there so give this output  [2,3,4,5] to previous invoke function then it will  remove exceution context out of the stack and convert ans1 using concat or spreadi i.e., [1],[2,3,4,5] ==> [1,2,3,4,5]
    repeact the 6 th step 
7. output is [1,2,3,4,5,6,7,8,9]

*/