//Database

class Bread {
    constructor(name, price, rate, quantity, desc) {
        this.name = name
        this.price = price
        this.rate = rate
        this.quantity = quantity
        this.desc = desc
    }

    get getName() {
        return this.name
    }

    get getPrice() {
        return this.price
    }

    get getRate() {
        return this.rate
    }

    get getQuantity() {
        return this.quantity
    }

    get getDesc() {
        return this.desc
    }
}

let bagel = new Bread("Bagel", 10.99, "5", 0, "Bagel is a bread originating in the Jewish communities of Poland. It is shaped by hand into the form of a ring from yeasted wheat dough, roughly hand-sized. It is dense, chewy, doughy interior with a browned and crisp exterior. Bagels are topped with seeds baked on the outer crust.")
let baguette = new Bread("Baguette", 8.99, "5", 0, "Baguette is a long, thin type of bread of French origin that is made from basic lean dough. It is distinguishable by its length and crisp crust.")
let breadstick = new Bread("Bread Stick", 5.99, "5", 0, "Breadstick, sometimes is called as grissini, grissino or dipping sticks, are generally pencil-sized sticks of crisp, dry baked bread that originated in Italy. These crispy sticks make the perfect appetizer or serve with a bowl of soup or stew.")
let brioche = new Bread("Brioche", 12.99, "5", 0, "Brioche is a bread of French origin and whose high egg and butter content gives it a rich and tender crumb. It has a dark, golden, and flaky crust, accentuated by an egg wash applied after proofing.")
let ciabatta = new Bread("Ciabatta", 15.99, "5", 0, "Ciabatta is an Italian white bread made from wheat flour, water, salt, yeast and olive oil, created in 1982 by a baker in Adria, Italy. Ciabatta is elongated, broad, and flat. Ciabatta is made with a strong flour and uses a much wetter dough than traditional French bread.")
let croissant = new Bread("Croissant", 12.99, "5", 0, "Croissant is a buttery, flaky, viennoiserie pastry of Austrian origin, but mostly associated with France. Croissants are named for its crescent shape and are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times. The results is a layered, flaky texture, similar to a puff pastry.")
let dorayaki = new Bread("Dorayaki", 6.99, "5", 0, "Dorayaki is a type of Japanese bread. It consists of two small pancake-like patties made from castella wrapped around a filling of sweet azuki bean paste. The original Dorayaki consisted of only one layer. Its current shape was invented in 1914. In Japanese, dora means gong, and because of the similarity of the shapes, this is probably the origin of the name of it.")
let muffin = new Bread("Muffin", 5.99, "5", 0, "Muffin is an individual-sized, baked product. While quickbread muffins are often sweetened, there are savory varieties made with ingredients such as corn and cheese. The flatbread is of British or European derivation, and dates from at least the early 18th century, while the quickbread originated in North America during the 19th century. Both are common worldwide today.")
let paodequeijo = new Bread("Pao De Queijo", 6.99, "5", 0, "Pao de queijo or Brazilian cheese bread is a small, baked cheese roll or cheese bun, a popular snack and breakfast food in Brazil. It is a traditional Brazilian recipe, originating in the state of Minas Gerais.")
let pretzel = new Bread("Pretzel", 3.99, "5", 0, "Pretzel is a type of baked pastry made from dough that is shaped into a knot. The traditional pretzel shape is a distinctive symmetrical form, with the ends of a long strip of dough intertwined and then twisted back onto itself in a particular way (a pretzel loop or pretzel bow). Today, pretzels come in a wide range of shapes.")
let wheatbread = new Bread("Wheat Bread", 17.99, "5", 0, "Wheat bread is a type of bread made using flour that is entirely milled from whole wheat grains. It is one kind of brown bread. Synonyms or near-synonyms for wheat bread outside the United States are whole grain bread or wholemeal bread. Some regions of the US simply called the bread wheat bread, a comparison to white bread.")
let whitebread = new Bread("White Bread", 15.99, "5", 0, "White bread is bread made from wheat flour from which the bran and the germ layers have been removed from the whole wheatberry as part of the flour grinding or milling process, producing a light-colored flour. This milling process can give white flour a longer shelf life by removing the natural oils from the whole grain.")

let breads = [bagel, baguette, breadstick, brioche, ciabatta, croissant, dorayaki, muffin, paodequeijo, pretzel, wheatbread, whitebread]

//Pages

let url = new URL(window.location.href)
let selected = parseInt(url.searchParams.get('productId'));

let title = document.getElementsByClassName("title")
title[0].innerHTML = `${breads[selected].getName}`

let price = document.getElementsByClassName("price")
price[0].innerHTML = `$${breads[selected].getPrice}`

let rate = document.getElementsByClassName("rateNum")
rate[0].innerHTML = `${breads[selected].getRate}/5`

let desc = document.getElementsByClassName("desc")
desc[0].innerHTML = `${breads[selected].getDesc}`

let img = document.getElementsByClassName("image")
img[0].src = `Assets/${breads[selected].getName} 1.jpg`

// Slide Show

let currImg = 1
let ovLeft = document.getElementsByClassName("ovLeft")
let ovRight = document.getElementsByClassName("ovRight")
let ovBot = document.getElementsByClassName("page")

function changePicture(pic, image) {
    pic[0].src = image
}

ovLeft[0].addEventListener("click", () => {
    if(currImg == 1) {
        currImg = 3
    }
    else {
        currImg -= 1
    }
    changePicture(img, `Assets/${breads[selected].getName} ${currImg}.jpg`)
    changePicture(ovBot, `Assets/Page ${currImg}.png`)
})

ovRight[0].addEventListener("click", () => {
    if(currImg == 3) {
        currImg = 1
    }
    else {
        currImg += 1
    }
    changePicture(img, `Assets/${breads[selected].getName} ${currImg}.jpg`)
    changePicture(ovBot, `Assets/Page ${currImg}.png`)
})

// Button

let min = document.getElementById("buttonLeft")
let plus = document.getElementById("buttonRight")

min.addEventListener("click", () => {
    let curQty = parseInt(document.getElementById("quantity").value)
    if(curQty > 1) curQty -= 1
    document.getElementById("quantity").value = curQty
})

plus.addEventListener("click", () => {
    let curQty = parseInt(document.getElementById("quantity").value)
    curQty += 1
    document.getElementById("quantity").value = curQty
})

// Local Storage

let buy = document.getElementsByClassName("addToCart")
let cartProduct = localStorage.getItem("CART") == undefined ? "[]" : localStorage.getItem("CART")
cartProduct = JSON.parse(cartProduct)

buy[0].addEventListener("click", () => {
    let qty = parseInt(document.getElementById("quantity").value)
    let flag = 0
    for (let index = 0; index < cartProduct.length; index++) {
        if(cartProduct[index].name == breads[selected].name) {
            flag = 1
            cartProduct[index].quantity += qty
            localStorage.setItem("CART", JSON.stringify(cartProduct))
            break
        }
    }
    if(flag == 0) {
        breads[selected].quantity = qty
        cartProduct.push(breads[selected])
        localStorage.setItem("CART", JSON.stringify(cartProduct))
    }
})

//Recommendation

let otherTxt1 = document.getElementsByClassName("othertxt1")
let otherImg1 = document.getElementsByClassName("otherimg1")
let url1 = document.getElementsByClassName("url1")
let curr1 = 0
if(selected + 1 == 12) curr1 = 0
else curr1 = selected + 1
otherImg1[0].src = `Assets/${breads[curr1].getName} 1.jpg`
otherTxt1[0].innerHTML = breads[curr1].getName
url1[0].href = `detailProduct.html?productId=${curr1}`

let otherTxt2 = document.getElementsByClassName("othertxt2")
let otherImg2 = document.getElementsByClassName("otherimg2")
let curr2 = 0
let url2 = document.getElementsByClassName("url2")
if(selected + 2 == 12) curr2 = 0
else if(selected + 2 == 13) curr2 = 1
else curr2 = selected + 2
otherImg2[0].src = `Assets/${breads[curr2].getName} 1.jpg`
otherTxt2[0].innerHTML = breads[curr2].getName
url2[0].href = `detailProduct.html?productId=${curr2}`

let otherTxt3 = document.getElementsByClassName("othertxt3")
let otherImg3 = document.getElementsByClassName("otherimg3")
let curr3 = 0
let url3 = document.getElementsByClassName("url3")
if(selected + 3 == 12) curr3 = 0
else if(selected + 3 == 13) curr3 = 1
else if(selected + 3 == 14) curr3 = 2
else curr3 = selected + 3
otherImg3[0].src = `Assets/${breads[curr3].getName} 1.jpg`
otherTxt3[0].innerHTML = breads[curr3].getName
url3[0].href = `detailProduct.html?productId=${curr3}`