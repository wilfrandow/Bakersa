let vanillaBase = "./Image/Vanilla-base.jpg"
let chocolateBase = "./Image/Chocolate-base.jpg"
let strawberryBase = "./Image/Strawberry-base.jpg"
let vanillaCream = "./Image/Vanilla-cream.jpg"
let chocolateCream = "./Image/Chocolate-cream.jpg"
let strawberryCream = "./Image/Strawberry-cream.jpg"

let cakeBase = "none";
let cakeCream  = "none";

function baseCake(base){
    cakeBase = base;
    if(cakeCream == "none"){
        if(cakeBase == "vanilla"){
            changePreviewImage(vanillaBase)
        } else if(cakeBase == "chocolate"){
            changePreviewImage(chocolateBase)
        } else {
            changePreviewImage(strawberryBase)
        }
    } else{
        creamCake(cakeCream)
    }
}

function creamCake(cream){
    cakeCream = cream
    if(cakeCream == "add-cream"){
        if(cakeBase == "vanilla"){
            changePreviewImage(vanillaCream)
        } else if(cakeBase == "chocolate"){
            changePreviewImage(chocolateCream)
        } else{
            changePreviewImage(strawberryCream)
        }
    } else {
        cakeCream = "none"
        baseCake(cakeBase)
    }
}

window.addEventListener("load", ()=>{
    let defPrev = document.getElementById("cake-preview")
    let defaults = `<img src="./Image/Empty-preview.jpg" alt="Cake Preview">`
    defPrev.innerHTML = defaults
})

function changePreviewImage(link){
    let image = (link)=>
    `<img src="${link}" alt="Cake Preview">`
    let preview = document.getElementById("cake-preview")
    preview.innerHTML = image(link)
}

function printCakeMessage(){
    let message = document.getElementById("cakemessage").value
    let color = document.getElementById("text-color").value

    let text = (message)=>
    `<div>
        <span style="color: ${color};">${message}</span>    
    </div>`
    let el = document.getElementById("cake-preview")
    el.innerHTML += text(message)
}