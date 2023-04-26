let currentResult = '';
let operator = '';

function addNumber(number) {
  currentResult += number;
  document.getElementById('result').value = currentResult;
}

function addOperator(op) {
  operator = op;
  currentResult += operator;
  document.getElementById('result').value = currentResult;
}

function calculate() {
  let result = eval(currentResult);
  document.getElementById('result').value = result;
}

function clearResult() {
  currentResult = '';
  operator = '';
  document.getElementById('result').value = currentResult;
}


// navbar dropdown test

// document.addEventListener("click", function(event) {
//   var dropdowns = document.querySelectorAll(".dropdown");
//   dropdowns.forEach(function(dropdown) {
//     if (!dropdown.contains(event.target)) {
//       dropdown.querySelector(".dropdown-menu").style.display = "none";
//     }
//   });
// });