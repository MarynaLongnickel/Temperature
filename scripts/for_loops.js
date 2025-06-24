function multiplicationTable(n) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${n} x ${i} = ${n * i}\n`;
  }
  return result;
}

function generateTable() {
  const input = document.getElementById('numberInput').value;
  const output = document.getElementById('output');
  const num = parseInt(input);

  if (isNaN(num)) {
    output.textContent = 'Please enter a valid number.';
  } else {
    output.textContent = multiplicationTable(num);
  }
}
