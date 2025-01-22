// Select the display element
const display = document.getElementById('display');

// Variables to store the current input and the full expression
let currentInput = '';
let expression = '';

// Function to handle button presses
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    // Clear button logic
    if (button.id === 'clear') {
      currentInput = '';
      expression = '';
      display.innerText = '0';
      return;
    }

    // Equals button logic
    if (button.id === 'equals') {
      try {
        const result = eval(expression); // Calculate the result
        display.innerText = result;
        expression = result.toString(); // Update the expression to the result
        currentInput = '';
      } catch (error) {
        display.innerText = 'Error';
      }
      return;
    }

    // Append the value to the expression
    expression += value;
    display.innerText = expression;
  });
});
