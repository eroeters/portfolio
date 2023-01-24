const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

clear() {
    this.currentOperand = ''
    this.previousOperand =''
    this.operation = undefined
    const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
}



delete() {
}

appendNumber(number) {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
        })
      })
}

chooseOperation(operation) {
}

compute() {
}

updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
}

}