let menuItem = document.querySelector(".menu")
menuItem.style.maxHeight = "0px";

function toggleMenu() {
    if (menuItem.style.maxHeight == "0px") {
        menuItem.style.maxHeight = "300px";
    }
    else {
        menuItem.style.maxHeight = "0px";
    }
}