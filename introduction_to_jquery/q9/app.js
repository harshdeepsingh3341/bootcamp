$('select').change(($event) => {
    var value = $('select').val();

    $('option[value='+value+']').attr("disabled","disabledg");

    $('#init').css("display","none");

    $('#result').css("display","block");

    $('#result').append(value + ", ");
})