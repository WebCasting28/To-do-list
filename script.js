
let button = document.getElementById("btn");

let enter = document.getElementById("enter");

let icon = document.getElementById("close");

/* main function to add the list in div while clicking on add btn */

button.addEventListener('click', ()=>{
     let get = document.getElementById("type").value;
     
    let txt = document.createElement("p");
    txt.innerHTML=get;
    enter.appendChild(txt);

    /*clear the box after click in add button */ 

     get = document.getElementById("type").value="";

    let create = document.createElement("p");
    create.innerHTML="<img src=close-btn.jpeg>";
    icon.appendChild(create);

      /*adding function on create variable to delete the to-do-list form the div */

     create.addEventListener('click', ()=>{
     enter.removeChild(txt);
     icon.removeChild(create);
     
   })
 
})



