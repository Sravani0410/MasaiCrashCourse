CreateIPhone1.prototype.dial=function(){
    console.log("tring... tring...")
}
CreateIPhone1.prototype.sendMessage=function(){
    console.log("Sending Message.....")
}
function CreateIPhone1(Id,color,display,weight){
    let obj={}
    Object.setPrototypeOf(obj,CreateIPhone1.prototype)
    obj.Id=Id;
    obj.color=color;
    obj.display=display;
    obj.weight=weight;
     return obj;
}

let i1=new CreateIPhone1(1,"black","128GB",1000)
let i2=new CreateIPhone1(2,"red","128GB",1000)
let i3=new CreateIPhone1(3,"green","128GB",1000)
let i4=new CreateIPhone1(4,"blue","128GB",1000)
let i5=new CreateIPhone1(5,"gray","128GB",1000)

i1.dial();
i1.sendMessage();
console.log(i1);
console.log(i2);
console.log(i3);