// Product List

let cartProduct = localStorage.getItem("CART") == undefined ? "[]" : localStorage.getItem("CART")
cartProduct = JSON.parse(cartProduct)

if(localStorage.getItem("CART") == undefined) {
    // Remove Cart Attribute
    let listTitle = document.getElementsByClassName("listTitle")
    listTitle[0].style.display = "none"

    document.getElementById("line").style.display = "none"

    let total = document.getElementsByClassName("total")
    total[0].style.display = "none"

    let recipient = document.getElementsByClassName("recipient")
    recipient[0].style.display = "none"

    let checkout = document.getElementsByClassName("checkout")
    checkout[0].style.display = "none"

    let empty = document.getElementsByClassName("emptyCart")
    empty[0].style.display = "flex"
}

function printProduct() {
    let item = (name, price, desc, quantity) =>
    `<div class="itemList">
        <div class="product">
            <div class="empty">
            </div>
            <div class="breadImage">
                <img src="Assets/${name} 1.jpg">
            </div>
            <div class="emptyempty">
            </div>
            <div class="breadDetail">
                <span class="breadName">
                    ${name}
                </span>
                <span class="breadDesc">
                    ${desc}
                </span>
            </div>
            <div class="empty">
            </div>
        </div>
        <div class="price">
            $${price}
        </div>
        <div class="qty">
            <div class="min">
                <button>
                    -
                </button>
            </div>
            <div class="quantity">
                ${quantity}
            </div>
            <div class="plus">
                <button>
                    +
                </button>
            </div>
        </div>
        <div class="totalPrice">
            $${(parseFloat(price)*parseInt(quantity)).toFixed(2)}
        </div>
        </div>
        <hr>`
    
    let itemList = document.getElementsByClassName("cartList")
    itemList[0].innerHTML = ""
    cartProduct.map((data) => {
        itemList[0].innerHTML += item(data.name, data.price, data.desc, data.quantity)
    })
}

// Total

function countTotal() {
    let subtotal = document.getElementsByClassName("subtotal")
    subtotal[1].innerHTML = ""
    let counter = 0
    cartProduct.map((data) => {
        counter += parseFloat(data.price)*parseInt(data.quantity)
        subtotal[1].innerHTML = `$${counter.toFixed(2)}`
    })

    let grandtotal = document.getElementsByClassName("grandtotal")
    grandtotal[1].innerHTML = subtotal[1].innerHTML
}

// Button
let buttonMin = document.getElementsByClassName("min")
let buttonMax = document.getElementsByClassName("plus")
let qtyItem = document.getElementsByClassName("quantity")

function runButton() {
    for (let index = 0; index < cartProduct.length; index++) {
        buttonMin[index].addEventListener("click", () => {
            if(cartProduct[index].quantity > 1) {
                cartProduct[index].quantity -= 1
                let count = cartProduct[index].quantity
                localStorage.setItem("CART", JSON.stringify(cartProduct))
                qtyItem[index].innerHTML = count
            }
            else if(cartProduct[index].quantity == 1) {
                let deleteItem = confirm("Do you want to delete this product from your cart?")
                if(deleteItem) {
                    cartProduct.splice(index, 1)
                    localStorage.setItem("CART", JSON.stringify(cartProduct))
                }
            }
            printProduct()
            runButton()
            countTotal()
            console.log("clicked");
        })
        buttonMax[index].addEventListener("click", () => {
            cartProduct[index].quantity += 1
            let count = cartProduct[index].quantity
            localStorage.setItem("CART", JSON.stringify(cartProduct))
            qtyItem[index].innerHTML = count
            printProduct()
            runButton()
            countTotal()
            console.log("clicked");
        })
        console.log("sini")
    }
}

// Run All

printProduct()
countTotal()
runButton()

// Form Validation

function validateEmpty(index, str) {
    if(index.value == "") {
        alert(`${str} must be filled out`);
        return false
    }
    return true
}

function validateEmailFormat(email) {
    let searcher = 0
    if(email.value.substr(email.value.length - 4) != '.com') {
        alert("Please enter a valid email")
        return false
    }
    for (let index = 0; index < email.value.length; index++) {
        let curChar = email.value[index];
        if(curChar == '@') {
            searcher = 1
            break
        }
    }
    if(searcher == 0) {
        alert("Please enter a valid email")
        return false
    }
    return true
}

function validatePhoneFormat(phone) {
    if(phone.value.length < 10) {
        alert("Please enter valid phone number")
        return false
    }
    if(phone.value.substring(0,2) != "08") {
        alert("Phone must be started with '08'")
        return false
    }
    return true
}

function validateTimeFormat(time) {
    let flag = 0
    if(time.value.length != 5) flag = 1
    if(time.value.substring(2,3) != ':' ) flag = 1
    if(isNaN(time.value.substring(0,2)) || isNaN(time.value.substring(3,5))) flag = 1
    if(flag == 1) {
        alert("Time format must be 'hh:mm'")
        return false
    }
    return true
}

function validateTime(time) {
    let hour = parseInt(time.value.substring(0,2))
    let minute = parseInt(time.value.substring(3,5))
    let flag = 0
    if(hour < 10 || hour > 18) flag = 1
    if(minute < 0 || minute > 59) flag = 1
    if(flag == 1) {
        alert("Time must between 10:00 and 18:59")
        return false
    }
    return true
}

let coButton = document.getElementsByClassName("checkout")

coButton[0].addEventListener("click", () => {
    let fname = document.getElementById("fname")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let address = document.getElementById("address")
    let courier = document.getElementById("courier")
    let delivery = document.getElementById("delivery")
    
    // Name
    let isNameFilled = validateEmpty(fname, "First name")
    if(!isNameFilled) return

    // Email

    // Required
    let isEmailFilled = validateEmpty(email, "Email")
    if(!isEmailFilled) return

    // Email format must be right
    let isEmailFormat = validateEmailFormat(email)
    if(!isEmailFormat) return

    // Phone

    //Required
    let isPhoneFilled = validateEmpty(phone, "Phone")
    if(!isPhoneFilled) return

    //Phone format must be right
    let isPhoneFormat = validatePhoneFormat(phone)
    if(!isPhoneFormat) return

    // Address
    let isAddressFilled = validateEmpty(address, "Address")
    if(!isAddressFilled) return

    // Delivery Time

    // Required
    let isDeliveryFilled = validateEmpty(delivery, "Delivery Time")
    if(!isDeliveryFilled) return

    // Time format must be right
    let isTimeFormat = validateTimeFormat(delivery)
    if(!isTimeFormat) return

    // Time is between 10:00 and 18:00
    let isTimeValid = validateTime(delivery)
    if(!isTimeValid) return

    localStorage.clear()

    alert("Thank you for your purchase")

    location.reload()
})