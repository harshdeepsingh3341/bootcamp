$('select').change(($event) => {
    var value = $('select').val();

    var div_html = $('#selectedValues').html().trim();

    if(div_html === "Nothing changed in the select as of now."){
        $('#selectedValues').html("Selected Values: " + value);
    }
    else{
        $('#selectedValues').append(", " + value);
    }
})