
$('button').click(($event) => {

    $('.element').each((inx, element) => {
        var i = +$(element).html();// +$(element).html()
        if(i > 10){
            $(element).css("background-color","red");
        }
    });
})
