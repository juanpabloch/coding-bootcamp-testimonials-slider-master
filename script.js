const next = document.querySelectorAll("#next");
const prev = document.querySelectorAll("#prev");
const tanya = document.querySelector("#tanya");
const john = document.querySelector("#john");

next.forEach(item => {
    item.addEventListener("click", function(e){
        tanya.classList.toggle("slide1");
        john.classList.toggle("slide");
    })
})
prev.forEach(item => {
    item.addEventListener("click", function(e){
        tanya.classList.toggle("slide1");
        john.classList.toggle("slide");
    })
})