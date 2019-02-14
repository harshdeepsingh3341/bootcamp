$('.container ul').on('click','button',function($event){
    var el = $(this).parent();
    var mydata = $($(this).parent().html()+'.li-content').text();

    console.log(JSON.parse(mydata).id);

    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/" + JSON.parse(mydata).id,
        type: 'DELETE',
        async: false,
        data: mydata,
        success: function(result){
            console.log(el);
            el.css('display','none');
        }
    })

});

$('.container button').click(function($event){
    $.ajax({url:"https://jsonplaceholder.typicode.com/posts",async: false, type: 'GET', success:function(result){
        result.forEach((element) => {
            var str;
            str = '<li><p class="li-content">' + JSON.stringify(element) + '</p> <button><i class="far fa-window-close fa-x disabled"></i></button></li>';

            $('.container ul').append(str);
        })
    }});
});