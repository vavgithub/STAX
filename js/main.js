const nav_hamburger = document.getElementById("nav_hamburger");
const nav_cross = document.getElementById("nav_cross");
const mobile_nav = document.getElementById("mobile_nav");
nav_hamburger.addEventListener("click", () => {
    nav_hamburger.style.display = "none"
    nav_cross.style.setProperty("display", "block", "important");
    mobile_nav.style.setProperty("max-height", "500px", "important");
})
nav_cross.addEventListener("click", () => {
    nav_cross.style.display = "none"
    nav_hamburger.style.setProperty("display", "block", "important");
    mobile_nav.style.setProperty("max-height", "0", "important");
})