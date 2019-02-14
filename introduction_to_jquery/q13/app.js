var max = Number.MIN_VALUE

$('ul li').each((idx,element) => {
    if($(element).height() > max){
        max = $(element).height();
    }
    $('.result p').html(max);
})