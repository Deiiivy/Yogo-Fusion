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

