const pi = 3.14;


// square equation
function square() {
    let length = document.getElementById("sq-len").value;
    if (length <= 0) {
        alert("Please enter a valid number higher than 0")
    } else {
        document.getElementById("sq-area").innerText = length * length;
}

}

// rectangle equation
function rectangle() {
    let length = document.getElementById("rec-len").value;
    let width = document.getElementById("rec-wid").value;

    if (length <= 0 || width <= 0) {
        alert("Please enter a valid number higher than 0")
    } else {
    document.getElementById("rec-area").innerText = length * width;
}
}

// triangle equation

function triangle() {
    let base = document.getElementById("tri-base").value;
    let height = document.getElementById("tri-hght").value;

    if (base <= 0 || height <= 0) {
        alert("Please enter a valid number higher than 0")
    } else {
    document.getElementById("tri-area").innerText = (1/2)*base*height;
}
}

// circle equation

function circle() {
    let radius = document.getElementById("cir-rad").value;

    if (radius <= 0) {
        alert("Please enter a valid number higher than 0")
    } else {
    document.getElementById("cir-area").innerText = pi * radius**2;
}
}