$('.parent').click(function($event){
    var i = $('.parent p').html()
    $('.result p').html(i);
});

$('.parent .child').click(function($event){
    event.stopPropagation();
    $('.result p').html($(this).html());
})