let my_arr = [1,2,3,4,2,3,41,2,3,5,1,4,7,5,8,5,6,78,2,3,4,5,6,2,2,5,7,8,89,9,7,5,34,6,65,345,5,4,3,2,7,6,8,9,0,7,6,4,3,2,6,7,8];

let show = document.querySelector('.container .show-array');
let reduced = document.querySelector('.container .reduced-array');

function showResult(){
    show.innerHTML = `<h2>Original Array</h2> 
    ${my_arr}`;
    let my_set = reduceArray(my_arr);
    let my_arr_red = [];

    for(let i of my_set){
        my_arr_red.push(i);
    }

    reduced.innerHTML = `<h2>Reduced Array</h2> 
    ${my_arr_red}`;
}