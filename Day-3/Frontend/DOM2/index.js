let mainSection=document.getElementById("data-list-wrapper");
let loadDataButton=document.getElementById("load-data")
let url="https://reqres.in/api/users";

loadDataButton.addEventListener("click",()=>{
    fetch(`https://reqres.in/api/users`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        mainSection.innerHTML=null;

        const cardList=document.createElement("div");
        cardList.classList.add("card-list");
        mainSection.append(cardList)

        data.data.forEach(item => {
            const card =document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-id",item.id);

            const cardImage=document.createElement("div");
            cardImage.classList.add("card-image");

            const img=document.createElement("img");
            img.src=item.avatar;
            img.setAttribute("alt","food");

            cardImage.append(img);

            const cardBody=document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle=document.createElement("div");
            cardTitle.classList.add("card-item");
            cardTitle.classList.add("card-title");
            cardTitle.innerText=item.first_name+""+item.last_name;

            const cardDescription=document.createElement("div");
            cardDescription.classList.add("card-item");
            cardDescription.classList.add("card-decription");
            cardDescription.innerText=item.email;

            const cardEdit=document.createElement("a");
            cardEdit.setAttribute("href","#");
            cardEdit.setAttribute("data-id",item.id);
            cardEdit.setAttribute("data-name",item.first_name+""+item.last_name);
            cardEdit.setAttribute("class","card-item card-link");
            cardEdit.innerText="EDIT";
        
            card.append(cardImage)
            card.append(cardBody)
            card.append(cardTitle)
            card.append(cardDescription)
            card.append(cardEdit)


        cardList.append(card)
        });
    })
})