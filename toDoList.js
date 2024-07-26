let btn = document.querySelector("button");
let ip = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function() {
    let li = document.createElement("li");
    let dltbtn = document.createElement("button");
    
    
    dltbtn.innerText= "delete";
    
    ul.appendChild(li);
    li.innerText = ip.value;
    li.appendChild(dltbtn);
    dltbtn.style.marginLeft = "10px";
    ip.value="";

    dltbtn.addEventListener("click", function(){
       li.remove();
    });
    
});

