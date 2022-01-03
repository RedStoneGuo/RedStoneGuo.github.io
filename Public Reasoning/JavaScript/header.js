var headernav = document.getElementById("headernav")
var menu = document.getElementById("menu")

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        headernav.classList.add("sticky");
        headerlogo.classList.add("reduce");
    }
    else{
        headernav.classList.remove("sticky");
        headerlogo.classList.remove("reduce");
    }
}