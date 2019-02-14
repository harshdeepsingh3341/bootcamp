$(() => {
    // var element = "<button id='dy-button'>I am dynamically generated</button>"
    // $('#my-button').after(element);
});

$('.container').on("click",'.dy-button',function($event){
    var myhtml = $(this).html();
    $('.footer p').append(" " + myhtml + " ");
});

// $('.dy-button').click(($event) => {
//     console.log(event);
// });

$('#my-button').on('click',($event) => {
    console.log(event);
    var element = "<button class='dy-button'>I am dynamically generated</button>"
    $('#my-button').after(element);
});




