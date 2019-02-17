$('.sub-menu-hidden').each(function(indx, element){
    var flag=true;
    var parent = $(element).parent();
    console.log($(element));
    $('.loader').css('display','inline-block');
    $(parent).on('mouseover',() => {
        if($(element).attr('class').indexOf('parent')!== -1){
            $(element).attr('class','sub-menu-shown parent');
            
            setTimeout(()=>{
                
                $('.container').css('display','block');
                $('.loader').css('display','none');
            },2000)
            
            /* if(flag){
                flag=false;
            $.ajax({url:"https://jsonplaceholder.typicode.com/posts/1",async: false, type: 'get',success: (result) => {
                result = [result];  
    
                var myresult=result.reduce((total,currValue) => {
                    if(total.hasOwnProperty(currValue.userId))
                        total[currValue.userId].push(currValue.title);
                    else
                        total[currValue.userId] = [currValue.title];
                    return total;
                },{});
    
                Object.keys(myresult).forEach((element) => {
    
                    var str='';
    
                    str = '<li>User ID: ' + element +'<i class="fas fa-angle-right"></i><div class="sub-menu-hidden children"><ul><li>sdfd</li></ul></div></li><hr>'
    
                    
    
                    // str.concat('</ul>');
    
                    $('.parent>ul').append(str);
                    str="";
                    myresult[element].forEach((el) => {
                        str.concat('<li>' + myresult[element][el] + '</li><hr>')
                    })
                });
                flag=false;
            }})
            flag=false;
        } */
        } 
        else    
        {
            console.log("not parent");
            $('.loader').css('display','none');
            $(element).attr('class','sub-menu-shown children');
            $(element).css('left',$(parent).outerWidth(true));
            $('.children ul li').css('display','block')
            

            var position = $(parent).position();
            var top = position.top;
            var left = position.left;
            
            $(element).css('top',top);
        }


        

    });
    $(parent).on('mouseleave',()=>{
        if($(element).attr('class').indexOf('parent')!== -1){
            $(element).attr('class','sub-menu-hidden parent');
        }
        else    
            $(element).attr('class','sub-menu-hidden children');
    });
});

$('.col-12 .navbar ul .menu').hover(function($event){
    $('.col-12 .navbar .menu > i').toggleClass("fa-angle-up");

    // $('.col-12 .navbar ul li div').toggleClass('sub-menu-shown')
});
