const pi = 3.1416;

function calc_area(type){
    let area;
    if(type==='circle'){
        let radius = document.getElementById("radius-circle").value;
        area = pi*radius*radius;
    }
    else if(type==='rectangle'){
        let length = document.getElementById("length-rect").value;
        let breadth = document.getElementById('breadth-rect').value;
        area = length*breadth;
    }
    else{
        let radius = document.getElementById("radius-cylinder").value;
        let height = document.getElementById('height-cylinder').value;
        area = 2*pi*radius*height + 2*pi*radius*radius;
    }
    return area;
}