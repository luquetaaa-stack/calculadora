var display = document.querySelector(".display")

function add(n){
    display.innerHTML+=n;
}

function del(){
    display.innerHTML = "";
}

function result(){
    let result= display.innerHTML;

    result=eval(result);
    display.innerHTML=result
}