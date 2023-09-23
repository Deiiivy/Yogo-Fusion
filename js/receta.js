// const btnSwitch = document.querySelector("#switch");

// if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark')
//     btnSwitch.classList.add('active');

//     localStorage.setItem('theme', 'dark')
// }
// else {
//     document.body.classList.remove('dark')
//     btnSwitch.classList.remove('active');

//     localStorage.setItem('theme', 'light')
// }

// btnSwitch.addEventListener('click', () => {
    
//     if (localStorage.getItem('theme') === 'dark') {
//         document.body.classList.remove('dark')
//         btnSwitch.classList.remove('active');

//         localStorage.setItem('theme', 'light')
//     }   
//     else {
//         document.body.classList.add('dark')
//         btnSwitch.classList.add('active');

//         localStorage.setItem('theme', 'dark')
//     }
   
// });


document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}



const btnLeft = document.querySelector("#btn-left"),
      btnRight = document.querySelector("#btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}
