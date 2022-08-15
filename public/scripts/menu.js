const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
   
    if (menu.classList.contains('active')){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
    else {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
})


// menu.addEventListener("click", function toggleDropdown(event)) {
//     // var dropdown = document.getElementById("dropdown");

//     if (event.target.classList.contains('#mobile-menu')){
//         menu.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     } else {
//         menuLinks.classList.remove('active');
//         menu.classList.remove('is-active');
//     }

    // function toggleDropdown(event) {
    //     // var dropdown = document.getElementById("dropdown");
    
    //     if (event.target.classList.contains('urunler')){
    //         dropdown.classList.toggle('show');
    //     } else {
    //         dropdown.classList.remove('show');
    //     }