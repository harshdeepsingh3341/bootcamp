$('button').click(($vent) => {
    // var div_content = $('div').html("<p>This is 'p' tag.</p>");
    $('.mydiv').replaceWith(function(){
        return ($('<p/>').append($(this).html()));
    });
})