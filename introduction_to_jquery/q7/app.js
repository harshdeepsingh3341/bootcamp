$('.click').click(function($event){
    var my_html = $(this).clone();
    console.log($(this).html());
    console.log($(this).clone());
    $(this).after(
        my_html
    );
})