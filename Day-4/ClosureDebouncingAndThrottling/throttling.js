/*
 * Throttling implies limiting the number of times a function gets called in a certain time period. 
 * It will prohibit a function from executing if we have invoked it “recently.” Throttling also guarantees that a function runs at a consistent rate. 
 * Throttling or sometimes also called throttle function, is a practice used in websites
 * Throttling can be implemented in JavaScript using timer functions such as setTimeout or setInterval.
 * for example: when we are playing the games like gun shooting--> when we trigerring the gun the bullet will come one time after that again we have to trigger in b/w we hav eto wait untill it will give animation.why we have to wat because at a time if fetch the api server it is loaded.
 * this is called throttling
 * advantages: we can limit the no.of calls.
               and reduce the load on server, improve the performance. in b/w loading animation. 
               because each api call is very costly operation(fetching data)
 * steps to follow:
               intially-->trigger
                             |
                          function call
                              |
                           start timer
                trigger--> compare with previous time
                               |
                             function call

 */

let input = document.getElementById("inpt");
let div = document.getElementById("container");
// when ever someone type in input tag it will trigger for that we have to use eventlisener

input.addEventListener("input", () => {
  // console.log(input.value)
//   ---------------------------modify into closure-----------------
//   Debouncing(fetchData, 500);
debouncing1()
// -----------------------------modify into closure-------------------
});
//    deboucing function-->before settimeout we have to check previous timer is running or not

// --------------------------------modify into closure-----------------------------
// let timer;
// function Debouncing(fun, delay) {
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(fun, delay);
// }
function Debouncing(fun, delay) {
    let timer;
    return function(){
        if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(fun, delay);
    }
}
// creste instance
let debouncing1=Debouncing(fun, delay)
// ------------------------------modify into closure-----------------------
function printData() {
  console.log(input.value);
}

async function fetchData() {
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=4c534241&s=${input.value}`
    );
    let data = await res.json();
    console.log(data);
    if (data.Response === "True") {
      appendData(data.Search);
    } else {
      div.innerText = "Too many result found";
    }
  } catch (err) {
    console.log(err);
  }
}
function createCard(item) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");

  card.className = "card";
  img.className = "poster";
  h3.className = "title";
  p.className = "type";

  img.src = item.Poster;
  h3.innerText = item.Title;
  p.innerText = item.Type;

  card.append(h3, p, img);
  return card;
}

function appendData(data) {
  div.innerHTML = "";
  data.forEach((item) => {
    console.log(item);
    let card = createCard(item);
    div.append(card);
  });
}

// --------------------------------modify into closure----------------------
// let throttletimer=false
// function throttle(fun,delay){
//   if(throttletimer){
//     return;
//   } 
//    fun() //bullet fired
//    throttletimer=true;  //loading animantion
//    setTimeout(()=>{
//     throttletimer=false  //animation is complete
//    },delay)
// }
function Throttle(fun,delay){
    let throttletimer=false
return function(){
    if(throttletimer){
        return;
      } 
       fun() //bullet fired
       throttletimer=true;  //loading animantion
       setTimeout(()=>{
        throttletimer=false  //animation is complete
       },delay)
}
 
}
let throttle1=Throttle(fun,delay)
// --------------------------modify into closure---------------------
