let btn = document.querySelector(".menu")
let menu = document.querySelector(".size-center")
let back = document.querySelector(".opt")
let ul = document.querySelector("ul")
let st = false


btn.addEventListener("click", () => {
    console.log("hello")
    if(st == false){
        menu.style.display = "block"
        
        back.style.animation = "animation: slide 1s ease-in 1 "
        ul.style.animation = "animation: slide 1s ease-in 1 "
        ul.style.marginTop = "60px"
        back.style.marginTop = "0px"
        st = true
        console.log("true")
    }
    else{
        back.style.animation = "animation: slide 1s ease-in 1 reverse"
        ul.style.animation = "animation: slide 1s ease-in 1 reverse"
        ul.style.marginTop = "-160px"
        back.style.marginTop = "-273px"
        
        st = false
        console.log("false")
    }
});