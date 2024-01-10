let btn=document.getElementById("send-request");
let resdiv =document.getElementById("response")
btn.addEventListener("click",function(){

    // get 
    // let res=fetch("https://640f55c04ed25579dc4c7a34.mockapi.io/employees")

    // post
    let res=fetch("https://640f55c04ed25579dc4c7a34.mockapi.io/employees",{
      method:'POST',
      body:JSON.stringify({
        "name": "sample122",
        "time": "Wed, 21 Oct 2015 18:27:50 GMT"
      }),
      headers:{
        'Content-type':'application/json'
      }
    }
    )
    // console.log(res)
    res
      .then((res)=>{
        console.log("hsdgsh")
        let j=res.json()
         return j   
      })
     .then((data)=>{
        console.log(data)
        // resdiv.innerHTML=JSON.stringify(data)
        resdiv.innerHTML=JSON.stringify(data,null,2) 
        /*formate the data, null , 2 --> spaces
        {
            "name":hdgh....
            ......:.....
        }
        this foramte but browser can't take spaces for that html will give <pre></pre>
        */
      })
      .catch((err)=>{
        console.log(err)
      })
      console.log("the button was cleared")

})