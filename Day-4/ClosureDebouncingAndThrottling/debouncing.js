/*
when we want to search in any website   based upon the type speed it will give the results
for example: in hotstar serach "a" it will give "a" results below  ---> in netword tab we can see api in that payload there is a search query:a
                       serach "a" it will give "av" results below  ---> in netword tab we can see api in that payload there is a search query: av
                       serach "a" it will give "aven" results below  ---> in netword tab we can see api in that payload there is a search query:aven  
              if we type fast it will give "avengers" results below--->only one api request is given 
by using debouncing we can acheive all tyep of users

steps to follow the debouncing to check:
1.when any key pressed,we need to check the timer,
   if timer is running--> clear the timer--->start new timer----
                                                               |
   if timer is not running--> start the timer--------------------->  both(running and not running) we give te event triggering or funciton call 

   implement in code:
 */

let input = document.getElementById("inpt");
let div = document.getElementById("container");
// when ever someone type in input tag it will trigger for that we have to use eventlisener

input.addEventListener("input", () => {
  // console.log(input.value)
  Debouncing(fetchData, 500);
});
//    deboucing function-->before settimeout we have to check previous timer is running or not

let timer;
function Debouncing(fun, delay) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fun, delay);
}

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
function createCard(item){

  let card = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");

  card.className = "card";
  img.className = "poster";
  h3.className = "title";
  p.className = "type";

  img.src= item.Poster;
  h3.innerText = item.Title;
  p.innerText = item.Type;

  card.append(h3,p,img);
  return card;
}

function appendData(data) {
  div.innerHTML = "";
  data.forEach((item) => {
    console.log(item)
    let card = createCard(item);
    div.append(card)
  });
}

// function createCard(item) {
//   const { poster, title, type, year, imdbID } = item;

//   // Create a movie card using HTML template string
//   const cardHTML = `
//         <div class="movie-card">
//             <img src="${poster}" alt="${title} Poster" class="poster">
//             <div class="movie-details">
//                 <h2 class="title">${title}</h2>
//                 <p class="info">${type} | ${year}</p>
//                 <p class="imdbID">IMDb ID: ${imdbID}</p>
//             </div>
//         </div>
//     `;

//   return cardHTML;
// }

// function appendData(data) {
//   div.innerHTML = "";
//   data.forEach((element) => {
//     console.log(element)
//     div.innerHTML += createCard(element);
//   });
// }
