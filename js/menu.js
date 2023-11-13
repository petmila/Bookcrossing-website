
    var i;
    var current_page = document.location.pathname.split("/").at(-1);
    var menu_items = document.getElementsByClassName("bookmark_menu__bookmark");

    for (i = 0; i < menu_items.length; i++) {
        menu_items[i].className = menu_items[i].className.replace(" active", "");
    }
    
    for (i = 0; i < menu_items.length; i++) {
        if (current_page === menu_items[i].attributes.href.value){
            menu_items[i].className += " active";
        }
    }

