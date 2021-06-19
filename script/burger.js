document.addEventListener("DOMContentLoaded",function(){

let toggles = document.querySelectorAll(".burger_toggle");

for (var i = 0; i < toggles.length; i++) {
    toggles[i].onclick = function(){
        document.querySelector('.burger_menu_btn').classList.toggle('open-menu');
        document.querySelector('.burger_menu_list').classList.toggle('open-menu');
        document.querySelector('.burger_menu_btn').classList.toggle('white-burger');
        document.querySelector('body').classList.toggle('block-scroll');
    };
}
    
});