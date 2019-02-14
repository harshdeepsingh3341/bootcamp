$(document).ready(function(){
     var imageArray = [];
     var i=0;
     imageArray.push("image1.jpg");
     imageArray.push("image2.jpg");
     imageArray.push("image3.jpg");
    
     console.log(imageArray);
     setInterval(
         function(){
             i++;
             if(i === imageArray.length){i=0;}
             $('.crousel').fadeOut("slow",function(){
                $(this).css("background-image",'url(' + imageArray[i] + ')');
                $(this).fadeIn('slow');
             });
         },1000
     );

});