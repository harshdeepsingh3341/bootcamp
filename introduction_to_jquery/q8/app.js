$(() => {
    // var element = "<button id='dy-button'>I am dynamically generated</button>"
    // $('#my-button').after(element);
});

$(' .dy-button').on("click",function(){
    console.log('event');
});


$('#my-button').on('click',($event) => {
    console.log(event);
    var element = "<button class='dy-button'>I am dynamically generated</button>"
    $('#my-button').after(element);
})

//this wont work
// $('#d-button').click(($event) => {
//     console.log(event);
// })

