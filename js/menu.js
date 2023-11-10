function activeMenu(){
    var i, menu_items;

    menu_items = document.getElementsByClassName("bookmark_menu__bookmark");
    for (i = 0; i < menu_items.length; i++) {
        if (document.location.href === menu_items[i].attributes.href.value){
            menu_items[i].style.display += " active";
        }
    }
    console.log(document.location.href);
}

window.addEventListener("load", function(event) {
    activeMenu()
}, false)
