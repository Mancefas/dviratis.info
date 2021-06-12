//Pirmas aprasymas
//const antJo = document.querySelector('.straipsniai-mgtk')
//const ciaPridedam = document.querySelector('.aprasymas')

//antJo.addEventListener('mouseover', () => {
//     ciaPridedam.classList.add('active');

//})

//const dingsta = document.querySelector('.aprasymas')

//dingsta.addEventListener('mouseleave', () => {
//     ciaPridedam.classList.remove('active')
//})

//Antras aprasymas

//const antJo2 = document.querySelector('.straipsniai-mgtk2')
//const ciaPridedam2 = document.querySelector('.aprasymas2')

//antJo2.addEventListener('mouseover', () => {
 //    ciaPridedam2.classList.add('active');

//})

//const dingsta2 = document.querySelector('.aprasymas2')

//dingsta2.addEventListener('mouseleave', () => {
 //    ciaPridedam2.classList.remove('active')
//})

const mygtukas = document.querySelectorAll(".straipsniai-mgtk")


mygtukas.forEach( element => {
     element.addEventListener('click', () => {
          element.parentNode.classList.toggle('active');
     })
})







