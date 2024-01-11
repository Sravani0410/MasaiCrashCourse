//offsetHeight  
//clientHeight
//scrollHeight
//scrollTop

let container = document.getElementById("container");
let flag = false;
// console.log(container.offsetHeight);
// console.log("clientHeight",container.clientHeight);
// console.log("scrollHeight",container.scrollHeight);
// let clientHeight = document.documentElement.clientHeight;
// let scrollHeight = document.documentElement.scrollHeight;
//let scrollTop = document.documentElement.scrollTop;

// console.log(clientHeight,scrollHeight);



let page = 1;
fetchData()

window.addEventListener("scroll",()=>{
    
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;

    //console.log(clientHeight,scrollHeight,scrollTop);
    if((scrollHeight - clientHeight)<=Math.ceil(scrollTop) && flag){
        console.log("we are at the bottom");
        page++;
        fetchData(page);
				flag = false;
    }
})



//to create the card
function createCard(item) {
    // Create card container element
    const card = document.createElement('div');
    card.classList.add('card');
  
    // Create image element
    const image = document.createElement('img');
    image.src = item.url;
    image.alt = item.title;
    card.appendChild(image);
  
    // Create title element
    const title = document.createElement('h2');
    title.textContent = item.title;
    card.appendChild(title);
  
    return card;
  }

  //to fetch the data
  async function fetchData(page=1){
    try{
        let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`);
        let data = await res.json();
        console.log(data);
        appendData(data)
				flag = true;
    }
    catch(err){
        console.log(err);
    }
  }


  //to append the data

  function appendData(data){
    data.forEach(item => container.append(createCard(item)));
  }