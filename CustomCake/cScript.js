let vanillaBase = "Assets/Vanilla-base.jpg"
let chocolateBase = "Assets/Chocolate-base.jpg"
let strawberryBase = "Assets/Strawberry-base.jpg"
let vanillaCream = "Assets/Vanilla-cream.jpg"
let chocolateCream = "Assets/Chocolate-cream.jpg"
let strawberryCream = "Assets/Strawberry-cream.jpg"

// set default image in preview image
let defPrev = document.getElementById("cake-preview")
let defaults = `<img src="./Image/Empty-preview.jpg" alt="Cake Preview">`
defPrev.innerHTML = defaults

// set default value of radio button
let baseCakeRadio = document.getElementsByName("base-cake")
baseCakeRadio[0].checked = true

let creamRadio = document.getElementsByName("cream")
creamRadio[1].checked = true

let cakeBase = "vanilla";
let cakeCream  = "no-cream";

function baseCake(base){
    // disini panggil fungsi loading screen

    cakeBase = base;
    if (cakeCream == "add-cream"){
        creamCake(cakeCream)
    } else {
        if(cakeBase == "vanilla"){
            changePreviewImage(vanillaBase)
        } else if(cakeBase == "chocolate"){
            changePreviewImage(chocolateBase)
        } else {
            changePreviewImage(strawberryBase)
        }
    }
}

function creamCake(cream){
    // disini panggil fungsi loading screen

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
        cakeCream = "no-cream"
        baseCake(cakeBase)
    }
}

<<<<<<< Updated upstream
=======
window.addEventListener("load", ()=>{
    let defPrev = document.getElementById("cake-preview")
    let defaults = `<img src="./Assets/Vanilla-Base.jpg" alt="Cake Preview">`
    defPrev.innerHTML = defaults
})

>>>>>>> Stashed changes
function changePreviewImage(link){
    let image = (link)=>
    `<img src="${link}" alt="Cake Preview">`
    let preview = document.getElementById("cake-preview")
    preview.innerHTML = image(link)
}

let messageBox = document.getElementById("cakemessage")
messageBox.value = ""

let colorBox = document.getElementById("text-color")

let cakeMessagePreview = document.getElementById("cake-text")

function printCakeMessage(){
    // disini panggil fungsi loading screen


    cakeMessagePreview.innerHTML = messageBox.value
    cakeMessagePreview.style.color = colorBox.value
}


// Add to cart

// storage:
// name, price, rate, quantity, desc

let addButton = document.getElementById("add-button")
addButton.addEventListener("click", () => {
    let cartProduct = localStorage.getItem("CART") == undefined ? "[]" : localStorage.getItem("CART")
    cartProduct = JSON.parse(cartProduct)

    let name = "Custom Cake"
    let price = 10.99
    let rate = "5"
    let quantity = 1
    let desc = `Base: ${cakeBase}, With Cream: ${cakeCream == "no-cream" ? "No" : "Yes"}, Message: ${messageBox.value}` 

    cartProduct.push({name, price, rate, quantity, desc})
    localStorage.setItem("CART", JSON.stringify(cartProduct))


    // re-initialize field
    baseCakeRadio[0].checked = true   
    creamRadio[1].checked = true 

    cakeBase = "vanilla";
    cakeCream  = "no-cream";

    messageBox.value = ""
    colorBox.value = "#000000"
})
