const menuBtnEl = document.querySelector(".js-btn-menu");
const menuBoxEl = document.querySelector(".js-box-menu");

menuBtnEl.addEventListener("click", onClickMenuBtn);

function onClickMenuBtn() {
  menuBoxEl.classList.toggle("show");
}

console.log(111);

function seyHi() {
  console.log("Hello world!");
}

function createRepository() {
  console.log("new repository");
}
