
// I needed three global variables for this program, total holds results of any calculations,
//currentNum, holds any digits entered piror to calculations
// and op, is a sting which holds my numbers
var total = 0;
var currentNum = 0;
var op = "";

// This function clears the calculator, setting all of my global variables back to 0
function clearCalculator(){
  total = 0;
  currentNum = 0;
  op = "";
  document.getElementById("display").innerHTML = 0;
}

//This function takes two digits and joins them together so that the program reads them as a whole number. Eg 12 instead of 1 & 2.
// To do that I turned both digits into strings and pushed them together.
//I then turned that string back into a number using parseInt.
function concatenateDigits(input){
  var concat = String(currentNum) + String(input);
  currentNum = parseInt(concat);
  document.getElementById("display").innerHTML = currentNum;
  return;
}

//This function does my calculations. I use the variable operator for the first operator entered then in the switch I call the global variable op.
//I'm using these two variables so that the program will wait for the subsquent digits instead of instantly doing the math once the opperator is entered.
//This means its possible to enter mutliple operators.
// op is then given the value of opperator and currentNum goes back to 0
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
