let expression = '';

function appendToResult(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    if (result === 8) {
      document.getElementById('result').value = 'i miss you';
    } else {
      document.getElementById('result').value = result;
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}
