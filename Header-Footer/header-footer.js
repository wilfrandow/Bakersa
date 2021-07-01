let menu_btn = $("#menu-dropdown")
let dropdown_menu = $("#dropdown")
let dropdown_status = false

menu_btn.on("click", ()=>{
    if (dropdown_status == false){
        dropdown_menu.css("display", "block")
        dropdown_status = true
        menu_btn.find("i").attr("class", "fa fa-chevron-up")
        
    } else {
        dropdown_menu.css("display", "none")
        dropdown_status = false
        menu_btn.find("i").attr("class", "fa fa-chevron-down")
    }
})