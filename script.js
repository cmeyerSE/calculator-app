function appendCharacter(char) {
  document.getElementById('display').value += char
}

function clearDisplay() {
  document.getElementById('display').value = ''
}

function deleteLast() {
  let display = document.getElementById('display')
  display.value = display.value.slice(0, -1)
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value)
    document.getElementById('display').value = result
  } catch (error) {
    alert('Invalid expression')
  }
}
