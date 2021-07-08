let vanillaBase = "Assets/Vanilla-base.jpg"
let chocolateBase = "Assets/Chocolate-base.jpg"
let strawberryBase = "Assets/Strawberry-base.jpg"
let vanillaCream = "Assets/Vanilla-cream.jpg"
let chocolateCream = "Assets/Chocolate-cream.jpg"
let strawberryCream = "Assets/Strawberry-cream.jpg"

//canvas and loading screen
const canvas = document.getElementById("loadingCanvas")
canvas.height = 300
canvas.width = 300
const ctx = canvas.getContext("2d")

let canvasDiv = document.getElementById("loadingScreen")

function random(min, max){
    if(min>max) return -1;
    const range = max - min + 1
    return Math.floor(Math.random()*range)+min;
}

let limit = 100
let x = random(0, canvas.width-limit)
let y = random(0, canvas.height-limit)
let vx = random(8,12);
let vy = random(8,12);
let bouncingId;

function bouncing(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.beginPath()
    const imgTag = document.getElementById("logo-loading")
    ctx.drawImage(imgTag,x,y,100,100)

    if(x > canvas.width-limit) vx = -(random(8,12));
    if(x < 0) vx = random(4,8);;
    if(y > canvas.height-limit) vy = -(random(8,12));
    if(y < 0) vy = random(8,12);

    x+=vx
    y+=vy

    bouncingId = requestAnimationFrame(bouncing)

    document.getElementById("loadingCanvas").style.opacity = 1

    canvasDiv.style.opacity = .2
}

function goLoading(){
    bouncing()

    setTimeout(() => {
        cancelAnimationFrame(bouncingId)
        ctx.clearRect(0,0, canvas.width, canvas.height)

        canvasDiv.style.opacity = 0;
    }, 1000);
}

// set default value of radio button
let baseCakeRadio = document.getElementsByName("base-cake")
baseCakeRadio[0].checked = true

let creamRadio = document.getElementsByName("cream")
creamRadio[1].checked = true

let cakeBase = "vanilla";
let cakeCream  = "no-cream";


function baseCake(base){
    cakeBase = base;
    if (cakeCream == "add-cream"){
        creamCake(cakeCream)
    } else {
        goLoading()
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
    cakeCream = cream
    if(cakeCream == "add-cream"){
        goLoading()
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

function changePreviewImage(link){
    setTimeout(() => {
        let image = (link)=>
        `<img src="${link}" alt="Cake Preview">`
        let preview = document.getElementById("cake-preview")
        preview.innerHTML = image(link)
    }, 1000)
}

let messageBox = document.getElementById("cakemessage")
messageBox.value = "Happy Birthday! Enjoy your day"

let colorBox = document.getElementById("text-color")

let cakeMessagePreview = document.getElementById("cake-text")

function printCakeMessage(){
    goLoading()

    setTimeout(() => {
        cakeMessagePreview.innerHTML = messageBox.value
        cakeMessagePreview.style.color = colorBox.value
    }, 1000)
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
    setTimeout(() => {
        baseCakeRadio[0].checked = true   
        creamRadio[1].checked = true 
    
        cakeBase = "vanilla";
        cakeCream  = "no-cream";
    
        messageBox.value = "Happy Birthday! Enjoy your day"
        colorBox.value = "#000000"
    
        printCakeMessage()
        changePreviewImage(vanillaBase)
    }, 1000)
})