const ratings = document.querySelector("#ratings-range");
const numbers = document.querySelectorAll("#ratings-range>span");
const btn = document.querySelector("#frontside-component > button");
let selected = false;


ratings.addEventListener("click", function (e) {
    if (e.target.nodeName == "SPAN") {
        for (elem of numbers) {
            elem.classList.add("hover:text-black", "hover:bg-medium-grey");
            elem.classList.remove("bg-orange", "font-bold");
            elem.style.color = "rgb(149, 158, 172)";
        }
        e.target.classList.add("bg-orange", "font-bold");
        e.target.classList.remove("hover:text-black", "hover:bg-medium-grey");
        e.target.style.color = "black";

        btn.disabled = false;
    } 
})

const front = document.querySelector("#frontside-component");
const back = document.querySelector("#backside-component");


btn.addEventListener("click", function() {
    front.style = "display: none";
    back.style = "display: flex"
})