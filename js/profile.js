function openProfile(event, content_id) {
    var i, profile_blocks, buttons;

    profile_blocks = document.getElementsByClassName("profile_block");
    for (i = 0; i < profile_blocks.length; i++) {
        profile_blocks[i].style.display = "none";
    }

    buttons = document.getElementsByClassName("profile_horisontal_menu__button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    document.getElementById(content_id).style.display = "block";
    event.currentTarget.className += " active";
}

function addBookToProfile(event) {
    var add_button_form = event.currentTarget.parentElement;
    let book_info = createEmptyBookInfo(); 
    add_button_form.parentElement.insertBefore(book_info, add_button_form);
}

function handleBookInfoInputForm(event) {
    event.preventDefault();
    var i, texts, text_content;
    let input_value = event.currentTarget.querySelector('input').value;
    texts = event.currentTarget.parentElement.getElementsByClassName('book_information__book_info_line');
    for (i = 0; i < texts.length; i++) {
        text_content = texts[i].innerText.split([':'])
        if (text_content[1] === '') {
            texts[i].innerHTML += ' ' + input_value;
            if (text_content[0] === 'Описание'){
                saveNewBookInProfile(event.currentTarget.parentElement);
            }
            break;
        }
    }
}

function saveNewBookInProfile(book_info){
    book_info.querySelector('form').remove();
    let form_buttons = document.createElement("form");
    let delete_button = document.createElement("input");
    delete_button.className = 'profile_block__button';
    delete_button.value = 'Удалить';
    delete_button.type = 'button';
    form_buttons.appendChild(delete_button);
    book_info.appendChild(form_buttons);
    let new_book = book_info.parentElement;
    console.log(JSON.stringify(new_book));
    // localStorage.setItem(localStorage.length + 1, JSON.stringify(new_book));
    
}

function createEmptyBookInfo() {
    let book_div = document.createElement("div");
    book_div.className = 'book_information';
    let book_image = document.createElement("img");
    book_image.className = 'book_information__book_image';
    book_div.appendChild(book_image);
    let book_text = document.createElement("div");
    book_text.className = 'book_information__book_info_text';
    book_text.appendChild(createEmptyBookInfoLine('Название:'));
    book_text.appendChild(createEmptyBookInfoLine('Автор:'));
    book_text.appendChild(createEmptyBookInfoLine('Год издания:'));
    book_text.appendChild(createEmptyBookInfoLine('Состояние:'));
    book_text.appendChild(createEmptyBookInfoLine('Описание:'));

    let form_input = document.createElement("form");
    form_input.id = 'book_info_input_form'; 
    let input = document.createElement("input");
    form_input.addEventListener('submit', handleBookInfoInputForm);
    form_input.appendChild(input);
    book_text.appendChild(form_input);
    book_div.appendChild(book_text);
    return book_div;
}

function createEmptyBookInfoLine(name) {
    let line = document.createElement('p');
    line.className = 'book_information__book_info_line';
    let b_name = document.createElement('b');
    b_name.textContent = name;
    line.appendChild(b_name);
    return line;
}

(function loadProfileFromLocalStorage(){
    // localStorage.clear();
    console.log(localStorage.length);
    if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let id = localStorage.key(i);
            let info = JSON.parse(localStorage.getItem(id));
            
        }
    }
}());

document.getElementById('my_books').style.display = "block";