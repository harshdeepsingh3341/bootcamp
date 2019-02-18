$('button').click(() => {
    $('p').html('wait');
    
    mySetTimeout(() => {
        alert("my Timeout")
    },1);
});

function mySetTimeout(callback,seconds){

    var start = new Date().getTime();
    while (new Date().getTime() < start + (seconds*1000));
    callback();

}