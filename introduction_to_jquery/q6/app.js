$('button').click(($vent) => {
    // var div_content = $('div').html("<p>This is 'p' tag.</p>");
    $('body .mydiv').replaceWith(function(){
        return ($('<p></p>'),{
            html: $(this).html(),
            
        })
    });
})