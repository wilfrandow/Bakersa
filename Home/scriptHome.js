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
}, 3000)



