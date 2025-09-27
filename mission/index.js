
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('body');
let content = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "black";
        content.style.borderColor = "white";
        pageContent.style.color = "white"; 
        logo.src = "rsz_byu_black.png"
        logo.alt = "BYU-I black logo"
        // code for changes to colors and logo
        selectElem.style.backgroundColor = "black";
        selectElem.style.color = "white";
        selectElem.style.border = "1px solid white";
    } else {
        document.body.style.backgroundColor = "white";
        content.style.borderColor = "black";
        pageContent.style.color = "black"; 
        logo.src = "byui_logo_white.png";
        logo.alt = "BYU-I White logo";
        // code for changes to colors and logo
        selectElem.style.backgroundColor = "white";
        selectElem.style.color = "black";
        selectElem.style.border = "1px solid black";
    }
}           
