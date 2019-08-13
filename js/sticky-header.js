window.onscroll = function() {addSticky()}

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function addSticky() {
    if(window.pageYOffset > sticky) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}