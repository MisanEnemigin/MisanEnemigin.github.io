var burger = document.getElementById("burger");
var navigation = document.getElementById("navigation");
var modal_button = document.getElementById("modal-button");
var main_button = document.getElementById("main-button");
var modal = document.getElementById("modal");

burger.addEventListener("click", () => {
    navigation.classList.toggle("show")
})

main_button.addEventListener("click", () => {
    modal.classList.add("show");
    console.log("Hi");
})

modal_button.addEventListener("click", () => {
    modal.classList.remove("show")
})