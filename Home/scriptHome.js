class Bread {
    constructor(id, image) {
        this.id = id
        this.image = image
    }

    get getId() {
        return this.id
    }
    
    get getImage() {
        return this.image
    }
}

let imgs = [
    new Bread(0, '../ClassicBread/Assets/Bagel 1.jpg'),
    new Bread(1, '../ClassicBread/Assets/Baguette 1.jpg'),
    new Bread(2, '../ClassicBread/Assets/Bread Stick 1.jpg'),
    new Bread(3, '../ClassicBread/Assets/Brioche 1.jpg'),
    new Bread(4, '../ClassicBread/Assets/Ciabatta 1.jpg'),
    new Bread(5, '../ClassicBread/Assets/Croissant 1.jpg'),
    new Bread(6, '../ClassicBread/Assets/Dorayaki 1.jpg'),
    new Bread(7, '../ClassicBread/Assets/Muffin 1.jpg'),
    new Bread(8, '../ClassicBread/Assets/Pao De Queijo 1.jpg'),
    new Bread(9, '../ClassicBread/Assets/Pretzel 1.jpg'),
    new Bread(10, '../ClassicBread/Assets/Wheat Bread 1.jpg'),
    new Bread(11, '../ClassicBread/Assets/White Bread 1.jpg')]

let img_a = $("#img-a")
let img_b = $("#img-b")

let cur_id = 0

img_a.attr("src", imgs[cur_id++].getImage)
img_b.attr("src", imgs[cur_id++].getImage)

setInterval(() => {
    if (cur_id % 2 == 0){
        img_b.fadeOut(2000, () => {
            img_b.attr("src", imgs[cur_id++].getImage)
        })
    } else {
        img_b.fadeIn(2000, () => {
            img_a.attr("src", imgs[cur_id++].getImage)
        })
    }
    if (cur_id > 11) cur_id = 0
    // console.log(cur_id)
}, 3000)

// CAKE
class Cake {
    constructor(id, image) {
        this.id = id
        this.image = image
    }

    get getId() {
        return this.id
    }
    
    get getImage() {
        return this.image
    }
}

let cakeImgs = [
    new Cake(0, '../CustomCake/Assets/Vanilla-cream-preview.jpg'),
    new Cake(1, '../CustomCake/Assets/Vanilla-base-preview.jpg'),
    new Cake(2, '../CustomCake/Assets/Chocolate-base-preview.jpg'),
    new Cake(3, '../CustomCake/Assets/Chocolate-cream-preview.jpg'),
    new Cake(4, '../CustomCake/Assets/Strawberry-base-preview.jpg'),
    new Cake(5, '../CustomCake/Assets/Strawberry-cream-preview.jpg')
]

let cake_img_a = $("#cake-img-a")
let cake_img_b = $("#cake-img-b")

let cake_cur_id = 0

cake_img_a.attr("src", cakeImgs[cake_cur_id++].getImage)
cake_img_b.attr("src", cakeImgs[cake_cur_id++].getImage)

setInterval(() => {
    if (cake_cur_id % 2 == 0){
        cake_img_b.fadeOut(2000, () => {
            cake_img_b.attr("src", cakeImgs[cake_cur_id++].getImage)
        })
    } else {
        cake_img_b.fadeIn(2000, () => {
            cake_img_a.attr("src", cakeImgs[cake_cur_id++].getImage)
        })
    }
    if (cake_cur_id > 5) cake_cur_id = 0
    // console.log(cur_id)
}, 3000)


// SLIDER ANIMATION
let slider = $("#slider")

let cur_promo = 0
let width = 250

setInterval(() => {
    let left_val = -1 * ((cur_promo++ % 3) * width)
    slider.animate({
        left: left_val
    }, 1000)
}, 4000)

