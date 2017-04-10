var total = 0;
var currentNum = 0;
var op = "";

function clearCalculator(){
  total = 0;
  currentNum = 0;
  op = "";
  document.getElementById("display").innerHTML = 0;
}

function concatenateDigits(input){
  var concat = String(currentNum) + String(input);
  currentNum = parseInt(concat);
  document.getElementById("display").innerHTML = currentNum;
  return;
}

function calculate(operator){
  switch (op){
    case '+':
        total = total + currentNum;
        break;
    case '-':
        total = total - currentNum;
        break;
    case '/':
        total = total / currentNum;
        break;
    case '*':
        total = total * currentNum;
        break;
    case '':
        total = currentNum;
        break;
      }
  currentNum = 0;
  op = operator;
  document.getElementById("display").innerHTML = total;
}
