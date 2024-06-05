let menuItem = document.querySelector(".menu")
let menuList =document.querySelectorAll(".menu-item")
menuItem.style.maxHeight = "0px";

function toggleMenu() {
    if (menuItem.style.maxHeight == "0px") {
        menuItem.style.maxHeight = "300px";
    }
    else {
        menuItem.style.maxHeight = "0px";
    }
}

function hideMenu() {
    menuItem.style.maxHeight = "0px";
}

menuList.forEach(function(item) {
    item.addEventListener('click', hideMenu);
});