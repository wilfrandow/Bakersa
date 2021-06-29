let menu_btn = $("#img-menu")
let dropdown_menu = $("#dropdown")
let dropdown_status = false

menu_btn.on("click", ()=>{
    if (dropdown_status == false){
        dropdown_menu.css("display", "block")
        dropdown_status = true
    } else {
        dropdown_menu.css("display", "none")
        dropdown_status = false
    }
})