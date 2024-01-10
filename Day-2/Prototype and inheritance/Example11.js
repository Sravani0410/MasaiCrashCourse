/*
convert constructor function into class function
*/

class IPhone1{
    constructor(Id,color,display,weight){
        this.Id=Id;
        this.color=color;
        this.display=display;
        this.weight=weight;
    }
    dial(){
        console.log("tring... tring...")
    }
    sendMessage(){
        console.log("Sending Message....")
    }
}

/* 
 Object.setPrototypeOf(IPhone2.prototype,IPhone1.prototype)
 instead of this we are using extend keyword
*/
class IPhone2 extends IPhone1{
   constructor(Id,color,display,weight,bluetooth,internet,camera){
        /*
         IPhone1.call(this,Id,color,display,weight)
         instead of this super()
        */
       super(Id,color,display,weight)
        this.bluetooth=bluetooth;
        this.internet=internet;
        this.camera=camera;
    }
    connectToBluetooth(){
        console.log("Connecting to Bluetooth")
    }
    connectToInternet(){
        console.log("connecting To Internet... ")
    }
}


let ipobj=new IPhone2(1,"black","128GB",1000,"1.0","2g","1.0 MP")
console.log(ipobj)