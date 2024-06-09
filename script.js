let expression = '';

function appendToResult(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function calculate() {
  document.getElementById('result').value = 'I miss you';
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}
