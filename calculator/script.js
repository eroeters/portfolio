// const btn1 = document.getElementById("btn1").value;
// const btn2 = document.getElementById("btn2").value;
// const btn3 = document.getElementById("btn3").value;
// const btn4 = document.getElementById("btn4").value;
// const btn5 = document.getElementById("btn5").value;
// const btn6 = document.getElementById("btn6").value;
// const btn7 = document.getElementById("btn7").value;
// const btn8 = document.getElementById("btn8").value;
// const btn9 = document.getElementById("btn9").value;
// const btn0 = document.getElementById("btn0").value;

// function f(val) {
//     document.getElementById("disp-content").innerText = val;
//     console.log(val);
// }

const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousTextElement = document.querySelectorAll('[data-previous]')
const currentTextElement = document.querySelectorAll('[data-current]')

class Calculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }
}


