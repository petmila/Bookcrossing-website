
    var i;
    var current_page = document.location.pathname.split("/").at(-1);
    var menu_items = document.getElementsByClassName("bookmark_menu__bookmark");
    if (current_page === '') {
        current_page = 'index.html'
    }

    for (i = 0; i < menu_items.length; i++) {
        menu_items[i].classList.remove("active");
    }
    
    for (i = 0; i < menu_items.length; i++) {
        if (current_page === menu_items[i].attributes.href.value){
            menu_items[i].classList.add("active");
        }
    }

