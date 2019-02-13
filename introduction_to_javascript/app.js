var rnavIndex=0;

var employees = [];

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
    for (var i=0;i<liItems.length;i++){
        liItems[i].className = liItems[i].className.replace(" active", "");
        document.getElementById(liItems[i].children[0].value).style = "display:none;";

    }
    document.getElementById(event.target.value).style = "display:block;"
    event.target.parentNode.className += " active";

    setTimeout(function (){
        if(window.innerWidth<=700){
            document.getElementById('navbar').style = "display:none;"
        }
    },400);
}

function result(event, id){
    if(id === 1){
        var amount = parseFloat(prompt("Please enter the amount (in " + "Rs.)"));
        var interest = parseFloat(prompt("Please enter the interest"));
        var time = Number(Math.round(parseFloat(prompt("Please enter the time(in years)")) + 'e2') + 'e-2');
        console.log(parseInt(time));
        console.log((Number(Math.round(time%1 +'e1')+'e-1'))*10);
        console.log(parseInt(time)*12);  
        time = (parseInt(time)*12) + ((Number(Math.round(time%1 +'e1')+'e-1'))*10);
        console.log(time);
        if(amount || interest || time){
            var result = Number(Math.round(((amount * interest * time)/1200) + 'e3')+'e-3');
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
        else
        {
            var resultHtml = document.getElementById('palindrome-result');
            resultHtml.style.visibility = "visible";
            resultHtml.innerHTML = "The given word/number is a <b>palindrome</b>."
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

function employeeOp(event,id){
    console.log(event);
    if(id === 1){
        var emp = {};
        emp.name = document.getElementById('name').value;
        emp.age = document.getElementById('age').value;
        emp.salary = document.getElementById('salary').value;
        emp.dob = document.getElementById('dob').value;
        emp.toString = function(){
            return "Employee:{" + "<br>name: " + this.name + ",<br>age: " + this.age + ",<br>salary: " + this.salary + ",<br>dob: " + this.dob + "<br>}"
        }
        employees.push(emp);
        console.log(employees);

        alert("Employee Added");

        // document.getElementById('name').value = null;
        // document.getElementById('age').value = null;
        // document.getElementById('salary').value = null;
        // document.getElementById('dob').value = null;
    }
    if(id === 2){
        var myEmps = employees.filter(function(currentValue, index, arr){
            return employees[index].salary>5000;
        });
        console.log(myEmps);
        var resultHtml = document.getElementById('employee-result');
        resultHtml.style.visibility = "visible";
        var str = "<div style='text-align:center'>Employees having salary greater than &#8377; 5000:<br></div>";
        myEmps.forEach((value) => {
            str += value.toString();
            str += "<br>";
        })
        resultHtml.innerHTML = str;

    }    

    if(id === 3){
        var result = employees.reduce((total, value) => {
            if(total.hasOwnProperty(value.age)) total[value.age].push(value);
            else{
                total[value.age]=[value];
            }
            return total;
        },{}); 
        console.log(result);
        var resultHtml = document.getElementById('employee-result');
        resultHtml.style.visibility = "visible";
        var str = "<div style='text-align:center'>Employees Grouped wrt to <b>AGE</b>:<br></div>"; 

        Object.keys(result).forEach((value) =>{
            str += "{Age: " + value + ", Employees:{ " + JSON.stringify(result[value]) + "}<br>"
        });
        resultHtml.innerHTML = str;
    }
    if(id === 4){
        var myEmps = employees.filter(function(currentValue, index, arr){
            return (employees[index].salary<=1000 && employees[index].age>20);
        });
        var str = "<div style='text-align:center'>Employees and salary Operation:<br><div>"
        myEmps.forEach((value) => {
            value.salary = parseFloat(value.salary) +  500;
            str += "{" + value.toString() +"}<br>"
        })
        console.log(myEmps);
        var resultHtml = document.getElementById('employee-result');
        resultHtml.style.visibility = "visible";
        resultHtml.innerHTML = str;
    }
    if(id === 5){
        var str = "<div style='text-align:center'>Employees:<br><div>";
        employees.forEach((value) => {
            str += "{" + value.toString() + "}<br>";
        });
        str += "<i style='text-align=center'>END</i>";
        var resultHtml = document.getElementById('employee-result');
        resultHtml.style.visibility = "visible";
        resultHtml.innerHTML = str;

    }
}

