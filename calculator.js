// Calculator functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
}

// Utility to update the result
function updateResult(value) {
  document.getElementById("calculation-result").textContent = value;
}

// Fetch and convert input values
function getInputs() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  return { num1, num2 };
}

// Event listeners
document.getElementById("add-button").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  const result = add(num1, num2);
  updateResult(result);
});

document.getElementById("subtract-button").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  const result = subtract(num1, num2);
  updateResult(result);
});

document.getElementById("multiply-button").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  const result = multiply(num1, num2);
  updateResult(result);
});

document.getElementById("divide-button").addEventListener("click", function () {
  const { num1, num2 } = getInputs();
  const result = divide(num1, num2);
  updateResult(result);
});
