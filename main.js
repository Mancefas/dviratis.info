'use strict';

const mygtukas = document.querySelectorAll(".straipsniai-mgtk")


mygtukas.forEach( element => {
     element.addEventListener('click', () => {
          element.parentNode.classList.toggle('active');
     })
});


const cookieContainer = document.querySelector(".cookie-container")
const cookieBtn = document.querySelector(".cookie-btn")

cookieBtn.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookiePranesimas", "true")
})

setTimeout( () => {
    if(!localStorage.getItem("cookiePranesimas"))
    cookieContainer.classList.add("active");
}, 2000);
