function openProfile(evt, content_id) {
    var i, profile_block, tablinks;

    profile_block = document.getElementsByClassName("profile_block");
    for (i = 0; i < profile_block.length; i++) {
        profile_block[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("profile_horisontal_menu__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(content_id).style.display = "block";
    evt.currentTarget.className += " active";
}