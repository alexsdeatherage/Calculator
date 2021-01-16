

document.querySelector('#add').addEventListener('click', addNums)
document.querySelector('#sub').addEventListener('click', subNums)
document.querySelector('#multi').addEventListener('click', multiNums)
document.querySelector('#divide').addEventListener('click', divideNums)
document.querySelector('#clear').addEventListener('click', clearNums)


function addNums() {
  const num1 = Number(document.querySelector('#firstNumber').value);
  const num2 = Number(document.querySelector('#secondNumber').value);
  const answer = num1 + num2
  document.querySelector('#answerHere').innerText = answer
}

function subNums() {
  const num1 = Number(document.querySelector('#firstNumber').value);
  const num2 = Number(document.querySelector('#secondNumber').value);
  const answer = num1 - num2
  document.querySelector('#answerHere').innerText = answer
}

function multiNums() {
  const num1 = Number(document.querySelector('#firstNumber').value);
  const num2 = Number(document.querySelector('#secondNumber').value);
  const answer = num1 * num2
  document.querySelector('#answerHere').innerText = answer
}

function divideNums() {
  const num1 = Number(document.querySelector('#firstNumber').value);
  const num2 = Number(document.querySelector('#secondNumber').value);
  const answer = num1 / num2
  document.querySelector('#answerHere').innerText = answer
}

function clearNums() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  const answer = ""
  document.querySelector('#answerHere').innerText = answer
}
