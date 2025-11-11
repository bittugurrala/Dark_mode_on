let on = document.getElementById("on")
let off = document.getElementById("off")


off.addEventListener("click", function(){    
    let container = document.getElementsByClassName("screen-container")[0]
    container.style.backgroundColor = "white"
    document.getElementById("heading").textContent = "Dark mode is off"    
    document.getElementById("heading").style.color = "black"
    // on.innerHTML = "Dark off <i class='fa-solid fa-moon'></i>"
    // on.style.color= "black"
    // off.innerHTML = "Dark on <i class='fa-solid fa-sun'></i>"
    // off.style.color= "white"
    on.classList.add("mode") 
    off.classList.remove("mode")


})

on.addEventListener("click",function(){
    let container = document.getElementsByClassName("screen-container")[0]
    document.getElementById("heading").textContent = "Dark mode is on"
    container.style.backgroundColor = "black";
    document.getElementById("heading").style.color ="white"
    // off.innerHTML = "Dark off <i class='fa-solid fa-sun'></i>"
    // off.style.color= "black"
    // on.innerHTML = "Dark on <i class='fa-solid fa-moon'></i>"
    // on.style.color= "white"
    off.classList.add("mode")
    on.classList.remove("mode")
} )