$('.container ul').on('click','button',function(){
    console.log(this);
});

$('.container button').click(function($event){
    $.ajax({url:"https://jsonplaceholder.typicode.com/posts",async: false, type: 'get', success:function(result){
        result.forEach((element) => {
            var str;
            str = '<li>' + JSON.stringify(element) + '<button><i class="far fa-window-close fa-x"></i></button></li>';

            $('.container ul').append(str);
        })
    }});
});