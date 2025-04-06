let country = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    
    call();
});


let url = ("http://universities.hipolabs.com/search?name=");
let list = document.querySelector("#list");



async function call(){
    try {let query = url+country.value;
    let res = await axios.get(query);
    let colleges = res.data;
    list.innerHTML= "";
    
        for(col of colleges){
        
        let div = document.createElement("div");
        div.classList.add("hui");
        let li = document.createElement("h2"); 
       
        li.innerHTML = `Name: ${col.name}`;
        let d = document.createElement("a");
        d.setAttribute("href", col.web_pages[0]);
        d.innerText = "See Website"
     
        list.appendChild(div);
        div.appendChild(li);
        div.appendChild(d);
        }   
    
    
    }
    catch(e){
        console.log(e);
    }
}
