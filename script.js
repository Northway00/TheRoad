const container = document.querySelector(".container")

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
});

//Fargene på home, tours, about us, offer, contact i navbaren ish (du ser det på siden)
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

//Gjør slik at hver link (se over) får hver sin farge = i++
Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
    item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach((item)=> {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");       
    };
});