document.addEventListener("DOMContentLoaded",function(){
let header = document.querySelector(".header__top");
let burger_btn = document.querySelector(".burger_menu_btn");
let upArrow = document.querySelector(".uparrow");
window.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    if (window.scrollY > 0){
        header.style.top = "0";
        header.style.borderRadius = "0 0 15px 15px";
        header.style.borderRadius = "0 0 15px 15px";
        burger_btn.style.top = "20px";

        upArrow.classList.add('active');
    } else {
        header.style.top = "10px";
        header.style.borderRadius = "0";
        burger_btn.style.top = "32px";

        upArrow.classList.remove('active');
    }
})

upArrow.addEventListener('click', function(){
    window.scrollTo(0, 0);
});

});