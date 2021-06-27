//Database

class Bread {
    constructor(name, image, link) {
        this.name = name
        this.image = image
        this.link = link
    }

    get getName() {
        return this.name
    }
    
    get getImage() {
        return this.image
    }

    get getLink() {
        return this.link
    }
}

let bagel = new Bread("Bagel", 'Assets/Bagel 1.jpg', "../DetailProduct/detailProduct.html?productId=0")
let baguette = new Bread("Baguette", 'Assets/Baguette 1.jpg', "../DetailProduct/detailProduct.html?productId=1")
let breadstick = new Bread("Bread Stick", 'Assets/Bread Stick 1.jpg', "../DetailProduct/detailProduct.html?productId=2")
let brioche = new Bread("Brioche", 'Assets/Brioche 1.jpg', "../DetailProduct/detailProduct.html?productId=3")
let ciabatta = new Bread("Ciabatta", 'Assets/Ciabatta 1.jpg', "../DetailProduct/detailProduct.html?productId=4")
let croissant = new Bread("Croissant", 'Assets/Croissant 1.jpg', "../DetailProduct/detailProduct.html?productId=5")
let dorayaki = new Bread("Dorayaki", 'Assets/Dorayaki 1.jpg', "../DetailProduct/detailProduct.html?productId=6")
let muffin = new Bread("Muffin", 'Assets/Muffin 1.jpg', "../DetailProduct/detailProduct.html?productId=7")
let paodequeijo = new Bread("Pao De Queijo", 'Assets/Pao De Queijo 1.jpg', "../DetailProduct/detailProduct.html?productId=8")
let pretzel = new Bread("Pretzel", 'Assets/Pretzel 1.jpg', "../DetailProduct/detailProduct.html?productId=9")
let wheatbread = new Bread("Wheat Bread", 'Assets/Wheat Bread 1.jpg', "../DetailProduct/detailProduct.html?productId=10")
let whitebread = new Bread("White Bread", 'Assets/White Bread 1.jpg', "../DetailProduct/detailProduct.html?productId=11")

let all_bread = [bagel, baguette, breadstick, brioche, ciabatta, croissant, dorayaki, muffin, paodequeijo, pretzel, wheatbread, whitebread]

let favorites = [bagel, baguette, breadstick, brioche, ciabatta, croissant, dorayaki, muffin, paodequeijo, pretzel, wheatbread, whitebread]
let breads = [bagel, baguette, brioche, ciabatta, wheatbread, whitebread]
let pastry = [breadstick, croissant, dorayaki, muffin, pretzel, paodequeijo]

//------------------ FAVORITES ----------------------------
//Panel 1
let fav_1_text = document.getElementById("fav_1_text")
fav_1_text.textContent = `${favorites[0].getName}`
let fav_1_image = document.getElementById("fav_1_image")
fav_1_image.src = `${favorites[0].getImage}`
let fav_1_link = document.getElementById("fav_1_link")
fav_1_link.href = `${favorites[0].getLink}`

//Panel 2
let fav_2_text = document.getElementById("fav_2_text")
fav_2_text.textContent = `${favorites[1].getName}`
let fav_2_image = document.getElementById("fav_2_image")
fav_2_image.src = `${favorites[1].getImage}`
let fav_2_link = document.getElementById("fav_2_link")
fav_2_link.href = `${favorites[1].getLink}`

//Panel 3
let fav_3_text = document.getElementById("fav_3_text")
fav_3_text.textContent = `${favorites[2].getName}`
let fav_3_image = document.getElementById("fav_3_image")
fav_3_image.src = `${favorites[2].getImage}`
let fav_3_link = document.getElementById("fav_3_link")
fav_3_link.href = `${favorites[2].getLink}`

//Panel 4
let fav_4_text = document.getElementById("fav_4_text")
fav_4_text.textContent = `${favorites[3].getName}`
let fav_4_image = document.getElementById("fav_4_image")
fav_4_image.src = `${favorites[3].getImage}`
let fav_4_link = document.getElementById("fav_4_link")
fav_4_link.href = `${favorites[3].getLink}`

//---------------------------------------------------------------

//------------------ BREADS ----------------------------
//Panel 1
let breads_1_text = document.getElementById("breads_1_text")
breads_1_text.textContent = `${breads[0].getName}`
let breads_1_image = document.getElementById("breads_1_image")
breads_1_image.src = `${breads[0].getImage}`
let breads_1_link = document.getElementById("breads_1_link")
breads_1_link.href = `${breads[0].getLink}`

//Panel 2
let breads_2_text = document.getElementById("breads_2_text")
breads_2_text.textContent = `${breads[1].getName}`
let breads_2_image = document.getElementById("breads_2_image")
breads_2_image.src = `${breads[1].getImage}`
let breads_2_link = document.getElementById("breads_2_link")
breads_2_link.href = `${breads[1].getLink}`

//Panel 3
let breads_3_text = document.getElementById("breads_3_text")
breads_3_text.textContent = `${breads[2].getName}`
let breads_3_image = document.getElementById("breads_3_image")
breads_3_image.src = `${breads[2].getImage}`
let breads_3_link = document.getElementById("breads_3_link")
breads_3_link.href = `${breads[2].getLink}`

//Panel 4
let breads_4_text = document.getElementById("breads_4_text")
breads_4_text.textContent = `${breads[3].getName}`
let breads_4_image = document.getElementById("breads_4_image")
breads_4_image.src = `${breads[3].getImage}`
let breads_4_link = document.getElementById("breads_4_link")
breads_4_link.href = `${breads[3].getLink}`

//---------------------------------------------------------------

//------------------ PASTRY ----------------------------
//Panel 1
let pastry_1_text = document.getElementById("pastry_1_text")
pastry_1_text.textContent = `${pastry[0].getName}`
let pastry_1_image = document.getElementById("pastry_1_image")
pastry_1_image.src = `${pastry[0].getImage}`
let pastry_1_link = document.getElementById("pastry_1_link")
pastry_1_link.href = `${pastry[0].getLink}`

//Panel 2
let pastry_2_text = document.getElementById("pastry_2_text")
pastry_2_text.textContent = `${pastry[1].getName}`
let pastry_2_image = document.getElementById("pastry_2_image")
pastry_2_image.src = `${pastry[1].getImage}`
let pastry_2_link = document.getElementById("pastry_2_link")
pastry_2_link.href = `${pastry[1].getLink}`

//Panel 3
let pastry_3_text = document.getElementById("pastry_3_text")
pastry_3_text.textContent = `${pastry[2].getName}`
let pastry_3_image = document.getElementById("pastry_3_image")
pastry_3_image.src = `${pastry[2].getImage}`
let pastry_3_link = document.getElementById("pastry_3_link")
pastry_3_link.href = `${pastry[2].getLink}`

//Panel 4
let pastry_4_text = document.getElementById("pastry_4_text")
pastry_4_text.textContent = `${pastry[3].getName}`
let pastry_4_image = document.getElementById("pastry_4_image")
pastry_4_image.src = `${pastry[3].getImage}`
let pastry_4_link = document.getElementById("pastry_4_link")
pastry_4_link.href = `${pastry[3].getLink}`

//---------------------------------------------------------------

function changeText(element, text) {
    element.textContent = text
}

function changeImage(element, image) {
    element.src = image
}

function changeLink(element, link) {
    element.href = link
}

function changeContent(txt1, txtNew1, img1, imgNew1, lnk1, lnkNew1
    , txt2, txtNew2, img2, imgNew2, lnk2, lnkNew2
    , txt3, txtNew3, img3, imgNew3, lnk3, lnkNew3
    , txt4, txtNew4, img4, imgNew4, lnk4, lnkNew4){
        
        changeText(txt1, txtNew1)
        changeImage(img1, imgNew1)
        changeLink(lnk1, lnkNew1)

        changeText(txt2, txtNew2)
        changeImage(img2, imgNew2)
        changeLink(lnk2, lnkNew2)

        changeText(txt3, txtNew3)
        changeImage(img3, imgNew3)
        changeLink(lnk3, lnkNew3)

        changeText(txt4, txtNew4)
        changeImage(img4, imgNew4)
        changeLink(lnk4, lnkNew4)
}

function previousMenu(section, text1, image1, link1, text2, image2, link2, text3, image3, link3, text4, image4, link4){
    var txt1 = document.getElementById(text1);
    var img1 = document.getElementById(image1);
    var lnk1 = document.getElementById(link1);

    var txt2 = document.getElementById(text2);
    var img2 = document.getElementById(image2);
    var lnk2 = document.getElementById(link2);

    var txt3 = document.getElementById(text3);
    var img3 = document.getElementById(image3);
    var lnk3 = document.getElementById(link3);

    var txt4 = document.getElementById(text4);
    var img4 = document.getElementById(image4);
    var lnk4 = document.getElementById(link4);

    if(section == 'favorites'){
        var idxPrevious = favorites.length - 1;
        for(var i = favorites.length;i > 0;i--){
            if(txt4.textContent != `${favorites[idxPrevious].getName}`){
                idxPrevious--;
            } else {
                break;
            }
        }
    
        if(idxPrevious == 3){
            return;
        } else {
            changeContent(
                txt1, `${favorites[idxPrevious-4].getName}`, img1, `${favorites[idxPrevious-4].getImage}`,lnk1, `${favorites[idxPrevious-4].getLink}`,
                txt2, `${favorites[idxPrevious-3].getName}`, img2, `${favorites[idxPrevious-3].getImage}`,lnk2, `${favorites[idxPrevious-3].getLink}`,
                txt3, `${favorites[idxPrevious-2].getName}`, img3, `${favorites[idxPrevious-2].getImage}`,lnk3, `${favorites[idxPrevious-2].getLink}`,
                txt4, `${favorites[idxPrevious-1].getName}`, img4, `${favorites[idxPrevious-1].getImage}`,lnk4, `${favorites[idxPrevious-1].getLink}`,
            )
        }
    } else if(section == 'breads'){
        var idxPrevious = breads.length - 1;
        for(var i = breads.length;i > 0;i--){
            if(txt4.textContent != `${breads[idxPrevious].getName}`){
                idxPrevious--;
            } else {
                break;
            }
        }
    
        if(idxPrevious == 3){
            return;
        } else {
            changeContent(
                txt1, `${breads[idxPrevious-4].getName}`, img1, `${breads[idxPrevious-4].getImage}`,lnk1, `${breads[idxPrevious-4].getLink}`,
                txt2, `${breads[idxPrevious-3].getName}`, img2, `${breads[idxPrevious-3].getImage}`,lnk2, `${breads[idxPrevious-3].getLink}`,
                txt3, `${breads[idxPrevious-2].getName}`, img3, `${breads[idxPrevious-2].getImage}`,lnk3, `${breads[idxPrevious-2].getLink}`,
                txt4, `${breads[idxPrevious-1].getName}`, img4, `${breads[idxPrevious-1].getImage}`,lnk4, `${breads[idxPrevious-1].getLink}`,
            )
        }
    } else if(section == 'pastry'){
        var idxPrevious = pastry.length - 1;
        for(var i = pastry.length;i > 0;i--){
            if(txt4.textContent != `${pastry[idxPrevious].getName}`){
                idxPrevious--;
            } else {
                break;
            }
        }
    
        if(idxPrevious == 3){
            return;
        } else {
            changeContent(
                txt1, `${pastry[idxPrevious-4].getName}`, img1, `${pastry[idxPrevious-4].getImage}`,lnk1, `${pastry[idxPrevious-4].getLink}`,
                txt2, `${pastry[idxPrevious-3].getName}`, img2, `${pastry[idxPrevious-3].getImage}`,lnk2, `${pastry[idxPrevious-3].getLink}`,
                txt3, `${pastry[idxPrevious-2].getName}`, img3, `${pastry[idxPrevious-2].getImage}`,lnk3, `${pastry[idxPrevious-2].getLink}`,
                txt4, `${pastry[idxPrevious-1].getName}`, img4, `${pastry[idxPrevious-1].getImage}`,lnk4, `${pastry[idxPrevious-1].getLink}`,
            )
        }
    }
}

function nextMenu(section, text1, image1, link1, text2, image2, link2, text3, image3, link3, text4, image4, link4){
    var txt1 = document.getElementById(text1);
    var img1 = document.getElementById(image1);
    var lnk1 = document.getElementById(link1);

    var txt2 = document.getElementById(text2);
    var img2 = document.getElementById(image2);
    var lnk2 = document.getElementById(link2);

    var txt3 = document.getElementById(text3);
    var img3 = document.getElementById(image3);
    var lnk3 = document.getElementById(link3);

    var txt4 = document.getElementById(text4);
    var img4 = document.getElementById(image4);
    var lnk4 = document.getElementById(link4);

    var idxNext = 0;
    if(section == 'favorites'){
        for(var i = 0; i < favorites.length;i++){
            if(txt1.textContent != `${favorites[idxNext].getName}`){
                idxNext++;
            } else {
                break;
            }
        }
        
        if(idxNext == favorites.length - 4){
            return;
        } else {
            changeContent(
                txt1, `${favorites[idxNext+1].getName}`, img1, `${favorites[idxNext+1].getImage}`,lnk1, `${favorites[idxNext+1].getLink}`,
                txt2, `${favorites[idxNext+2].getName}`, img2, `${favorites[idxNext+2].getImage}`,lnk2, `${favorites[idxNext+2].getLink}`,
                txt3, `${favorites[idxNext+3].getName}`, img3, `${favorites[idxNext+3].getImage}`,lnk3, `${favorites[idxNext+3].getLink}`,
                txt4, `${favorites[idxNext+4].getName}`, img4, `${favorites[idxNext+4].getImage}`,lnk4, `${favorites[idxNext+4].getLink}`,
            )
        }
    } else if(section == 'breads'){
        for(var i = 0; i < breads.length;i++){
            if(txt1.textContent != `${breads[idxNext].getName}`){
                idxNext++;
            } else {
                break;
            }
        }
        
        if(idxNext == breads.length - 4){
            return;
        } else {
            changeContent(
                txt1, `${breads[idxNext+1].getName}`, img1, `${breads[idxNext+1].getImage}`,lnk1, `${breads[idxNext+1].getLink}`,
                txt2, `${breads[idxNext+2].getName}`, img2, `${breads[idxNext+2].getImage}`,lnk2, `${breads[idxNext+2].getLink}`,
                txt3, `${breads[idxNext+3].getName}`, img3, `${breads[idxNext+3].getImage}`,lnk3, `${breads[idxNext+3].getLink}`,
                txt4, `${breads[idxNext+4].getName}`, img4, `${breads[idxNext+4].getImage}`,lnk4, `${breads[idxNext+4].getLink}`,
            )
        }
    } else if(section == 'pastry'){
        for(var i = 0; i < pastry.length;i++){
            if(txt1.textContent != `${pastry[idxNext].getName}`){
                idxNext++;
            } else {
                break;
            }
        }
        
        if(idxNext == pastry.length - 4){
            return;
        } else {
            changeContent(
                txt1, `${pastry[idxNext+1].getName}`, img1, `${pastry[idxNext+1].getImage}`,lnk1, `${pastry[idxNext+1].getLink}`,
                txt2, `${pastry[idxNext+2].getName}`, img2, `${pastry[idxNext+2].getImage}`,lnk2, `${pastry[idxNext+2].getLink}`,
                txt3, `${pastry[idxNext+3].getName}`, img3, `${pastry[idxNext+3].getImage}`,lnk3, `${pastry[idxNext+3].getLink}`,
                txt4, `${pastry[idxNext+4].getName}`, img4, `${pastry[idxNext+4].getImage}`,lnk4, `${pastry[idxNext+4].getLink}`,
            )
        }
    }
}

