/*
using the constructor function i.e., new keyword
advantages of new keywords are no need to create these 2 lines:
 let obj={}
 Object.setPrototypeOf(obj,CreateIPhone1.prototype)
instead of we are using this keyword.
*/

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