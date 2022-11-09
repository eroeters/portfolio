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

// cone equation

function cone() {
    let radius = document.getElementById("cone-rad").value;
    let slant = document.getElementById("cone-slant").value;

    if (radius <= 0 || slant <= 0) {
        alert("Please enter a valid number higher than 0")
    } else {
    document.getElementById("cone-area").innerText = pi * radius * slant;
}
}

// sphere equation

function sphere() {
    let radius = document.getElementById("sphe-rad").value;

    if (radius <= 0) {
        alert("Please enter a valid number higher than 0")
    } else {
    document.getElementById("sphe-area").innerText = 4 * pi * radius**2;
}
}

// cube equation

function cube() {
    let edge = document.getElementById("cube-len").value;

    if (edge <= 0) {
        alert("Please enter a valid number higher than 0")
    } else {
    document.getElementById("cube-area").innerText = 6 * edge**2;
}
}



// box volume equation

// function box() {
//     let length = document.getElementById("box-rad").value;
//     let width = document.getElementById("box-rad").value;
//     let height = document.getElementById("box-rad").value;

//     if (length <= 0 || width <= 0 || height <= 0) {
//         alert("Please enter a valid number higher than 0")
//     } else {
//     document.getElementById("box-area").innerText = length * width * height;
// }
// }