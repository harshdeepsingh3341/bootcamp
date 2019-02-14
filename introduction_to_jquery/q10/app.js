$('.col-12 .navbar ul .menu').hover(function($event){
    $('.col-12 .navbar .menu i').toggleClass("fa-angle-up fa-angle-down");

    $('.col-12 .navbar ul li div').toggleClass('sub-menu-shown sub-menu-hidden')
});