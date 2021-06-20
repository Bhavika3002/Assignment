function display(val) {
    document.getElementById("result").value += val;
}

function clr() {
    document.getElementById("result").value = "0";
}

function backspace() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}

function square(){
    solve()
    let x = parseInt(document.getElementById("result").value, 10);
    document.getElementById("result").value = x*x;
}

function solve() {
    let x = document.getElementById("result").value;
    if (x == "0"){
        y = "0"
    }
    else{
        y = eval(x);
    }
    document.getElementById("result").value = y;
}