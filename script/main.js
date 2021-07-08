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

// $("#form").submit(function(event){
//     $.ajax({
//         url: 'send.php',
//         type: 'POST',
//         data: {
//             width: $('#width').val(),
//             height: $('#height').val(),
//             gateType: $('input[type="radio"]:checked').val(),
//             name: $('#name').val(),
//             phone: $('#email').val(),
//             address: $('#address').val()
//         },
//         success: function(msg) {
//             alert('Email Sent');
//         }               
//     });
// });

// Variable to hold request
var request;

function fadeIn(){
    document.querySelector(".form_popup").classList.remove("visible");
}

// Bind to the submit event of our form
$("#form").submit(function(event){

    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, button");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "/send.php",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        document.querySelector(".form_popup").classList.add("visible");
        setTimeout(fadeIn, 2500);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

});

});