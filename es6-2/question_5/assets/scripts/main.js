function getArea(type){
    let area = calc_area(type);
    document.querySelector("." + type + " .result").innerHTML = `<span>Area: </span> ${area} units<sup>2</sup>`;
}