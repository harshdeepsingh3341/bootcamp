var rnavIndex=0;
function rnavShow(){
    var liItems = document.getElementsByClassName('custom-li');
    for(i in liItems){
        console.log(liItems[i]);
        liItems[i].style = "display:block; text-align:right";
    }
    if(rnavIndex % 2 === 0){
        console.log("Open");
        document.getElementById('navbar').style.display = "block";
        rnavIndex++;
    }
    else{
        console.log("Close");
        document.getElementById('navbar').style.display = "none";
        rnavIndex--;
    }
}