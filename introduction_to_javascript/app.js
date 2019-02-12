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

function exercise(event){
    console.log(event);
    var liItems = document.getElementsByClassName('custom-li');
    console.log(liItems);
    for (var i=0;i<liItems.length;i++){
        liItems[i].className = liItems[i].className.replace(" active", "");
        document.getElementById(liItems[i].children[0].value).style = "display:none;";

    }
    document.getElementById(event.target.value).style = "display:block;"
    event.target.parentNode.className += " active";
}

function result(event, id){
    if(id === 1){
        var amount = parseFloat(prompt("Please enter the amount (in " + "Rs.)"));
        var interest = parseFloat(prompt("Please enter the interest"));
        var time = parseFloat(prompt("Please enter the time(in years)"));
        if(amount || interest || time){
            var result = (amount * interest * time)/100;
            var resultHtml = document.getElementById('simpleInterest-result');resultHtml.style.visibility="visible";
            resultHtml.innerHTML = "Simple Interest = &#8377; " + result;
        }
    }
    if(id === 2){
        var result = false;
        var string = prompt("Enter your word/number to check for palindrome (case-sensitive)");
        if(string){
            for (var i =0;i<string.length/2;i++){
                if(string.charAt(i) != string.charAt(string.length-i-1)){
                    result = false;
                    break;
                }
                else{
                    result = true;
                }
            }
            var resultHtml = document.getElementById('palindrome-result');
            resultHtml.style.visibility = "visible";
            if(result){
                resultHtml.innerHTML = "The given word/number is a <b>palindrome</b>."
            }
            else
                resultHtml.innerHTML = "The given word/number is <b>not</b> a palindrome."
        }
    }
    if(id === 3){
        var radius = parseFloat(prompt("Please Enter the radius of the circle"));
        if(radius){
            var result = 3.141 * radius * radius;
            var resultHtml = document.getElementById('circle-result');
            resultHtml.style.visibility = "visible";
            resultHtml.innerHTML = "Area of the circle is " + result + " unit<sup>2</sup>"
        }
    }

    if(id === 4){
        var employee = {
            id: 3341,
            name:"Harshdeep Singh",
            gender: "M",
            phone:9971572329,
            bootcamp_group: "group 2",
            toString:function(){
                return "employee{<br>id: " + this.id + ", name: " + this.name + ", gender: " + this.gender + ", phone: " + this.phone + ", bootcamp_group: " + this.bootcamp_group + "<br>}"
            }
        }

        var copyOf = {};
        
        for(var prop in  employee){
            copyOf[prop] = employee[prop];
        }

        var resultHtml = document.getElementById('clonedObject-result');
        resultHtml.style.visibility = "visible";
        resultHtml.innerHTML = "<div style='text-align:center'>Original Object</div>" + employee.toString() + "<div style='text-align:center'>Copied Object</div>" + copyOf.toString();

    }
}