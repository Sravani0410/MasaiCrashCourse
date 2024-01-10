//Enter code here
function Bubblesort(N,arr){
    console.log(N,arr)
    if(N==1){
        return
    }
    var count=0;
    for(var i=0;i<N-1;i++){
        if(arr[i]>arr[i+1]){
            var temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            count++
        }
    }
    if(count==0){
        return
    }
    Bubblesort(N-1,arr)
}
function runProgram(input){
input=input.trim().split("\n")
var N=+input[0]
var arr=input[1].trim().split(" ").map(Number)
Bubblesort(N,arr)
var bag=""
for(var i=0;i<arr.length;i++){
    var bag=bag+arr[i]+" "
}
console.log(bag)

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read="";
process.stdin.on("data",function(input){
  read += input;
});
process.stdin.on("end",function(){
  read=read.replace(/\n$/,"");
  read=read.replace(/\n$/,"");
  runProgram(read)
});