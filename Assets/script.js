let calculationDiv = document.getElementById("calculation-div");
  
/* convert given string into comma seperated value
formateNumberWithComm(inputString)
@param {string} inputString :- which is in normal form
@return {string} outputString :- comma seperated value of given string usign regex
*/
  function formatNumbersWithComma(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

/* generate maths eqution to eval.  
addChar(element : html-element)
@param {html-element} element :- it is a value assoiated with button
*/
  function addChar(element) {
    let char = element.getAttribute("data-value");
    let currentValue = calculationDiv.innerText.replace(/ /g, "");
    currentValue += char;
    calculationDiv.innerText = formatNumbersWithComma(currentValue);
  }

/* calculate()
it will calculate the math equation and give output */
  function calculate() {
    let calValue = calculationDiv.innerText.replace(/ /g, '');
    calculationDiv.innerText = formatNumbersWithComma(eval(calValue).toString());
  }

/* backspace()
it remove the last character from the input string */ 
  function backspace() {
    let calValue = calculationDiv.innerText.replace(/ /g, '');
    let calValueLength = calValue.length;
    let newcalValue = calValue.substring(0, calValueLength - 1);
    calculationDiv.innerText = formatNumbersWithComma(newcalValue);
  }

/* clearScreen()
 it clear outputbox(display part)*/
  function clearScreen() {
    calculationDiv.innerText = "";
  }

/* it change sign of current input (like plus to minus/ minus to plus)
plusorMinus() */
  function plusorMinus() {
    let calVal = Number(calculationDiv.innerText.replace(/ /g, ''));
    calVal = calVal * -1;
    calculationDiv.innerText = formatNumbersWithComma(calVal.toString());
  }

/* trigonometry function to calculate sin,cos,tan,cot,sec,cosec
   trigonometry(function name) */
  function trigonometry(fun) {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    let result = 0;
    switch (fun) {
        case "sin":
            result = Math.sin(calValue); 
            break;
        case "cos":
            result = Math.cos(calValue); 
            break;
        case "tan":
            result = Math.tan(calValue); 
            break;
        case "cot":
            result = 1 / Math.tan(calValue); 
            break;
        case "sec":
            result = 1 / Math.cos(calValue); 
            break;
        case "cosec":
            result = 1 / Math.sin(calValue); 
            break;
    }
    if (result === NaN) {
        calculationDiv.innerText = "Error";
    }
    else {
        calculationDiv.innerText = formatNumbersWithComma(result.toString());
    }
  }

/* calculate the specified math function's value 
mathFunction(function_name : string)*/
  function mathFunction(functionName) {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    let result = 0;
    switch (functionName) {
        case 'round':
            result = Math.round(calValue);
            break; 
        case 'floor':
            result = Math.floor(calValue);
            break;
        case 'ceil':
            result = Math.ceil(calValue);
            break;
        case 'trunc':
            result = Math.trunc(calValue);
            break;
    }
    calculationDiv.innerText = formatNumbersWithComma(result.toString());
  }

/* calc_square()
calculate the square of the given input value  */
  function cal_square() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calValue *= calValue;
    calculationDiv.innerText = formatNumbersWithComma(calValue.toString());
  }

/* calc_sqrt()
calculate the square root of the given input */
  function cal_sqrt() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.sqrt(calValue).toString();
  }
 
/* calc_absolute() 
calculate the absolute value of given input */ 
  function cal_absolute() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = String(Math.abs(calValue));
  }
 
/* calc_exp()
calculate the exponent value of the given value */
  function cal_exp() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = String(Math.exp(calValue));
  }
  
/* fixed_exp()
fixed value with exponent values */
  function fixed_exp() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = formatNumbersWithComma(calValue.toExponential(3));
  }

/* radianToDegree()
convert given radiad value into degree */
  function radianToDegree() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    operationValue = operationValue * (180 / Math.PI);
    operationDiv.innerText = formatNumbersWithComma(operationValue.toString());
  }

/* calc_factorial()
calculate the factorial value of the given value */
  function cal_factorial() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    let result = 1;
    let i = 0;
    for (i = calValue; i >= 1; i--) {
        result= result *i;
    }
    calculationDiv.innerText = result.toString();
  }
  
/* cal_ten_pow() 
calculate the value of the power of 10 */
  function cal_ten_pow() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.pow(10, calValue).toString();
  }

/* calc_log()
calculate the logerithmic value base 10 and display result */
  function cal_log() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.log10(calValue).toString();
  }

/* calc_ln() 
calculate the logerithmic value base e and display result */ 
  function cal_ln() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.log(calValue).toString();
  }
 

// MC, MR, M+, M-, MS funtionality
 let memoryValue = 0; // memoryvalue is a memory  which store the memory value
 let memoryStatus = 0; // memorystatus flag is used whether memory is present or not

/* clear  memory values
memoryClear() */
function memoryClear() {
  memoryValue = 0;
  memoryStatus = 0;
  if (memoryStatus == 0) {
      document.getElementById("memory-clear").style.opacity = "0.2";
      document.getElementById("memory-recall").style.opacity = "0.2";
  }
}

/* calculate the value of memory values and display
memoryRecall() */
function memoryRecall() {
  calculationDiv.innerText = formatNumbersWithComma(memoryValue.toString());
}

/* add the input value to the memory stack
memoryPlus() */
function memoryPlus() {
  let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
  if (calculationDiv.innerText != "") {
      memoryValue += calValue;
      memoryStatus = 1;
  }
  if (memoryStatus == 1) {
      document.getElementById("memory-clear").style.opacity = "1";
      document.getElementById("memory-recall").style.opacity = "1";
  }
  calculationDiv.innerText = "";
}

/* reduse memory value by the givan value
memoryMinus() */
function memoryMinus() {
  let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
  if (calculationDiv.innerText != "") {
      memoryValue -= calValue;
      memoryStatus = 1;
  }
  if (memoryStatus == 1) {
      document.getElementById("memory-clear").style.opacity = "1";
      document.getElementById("memory-recall").style.opacity = "1";
      memoryStatus = 1;
  }
  calculationDiv.innerText = "";
}

 /* put the input value into the memory stack
 memorySave() */
 function memorySave() {
  let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
  if (calculationDiv.innerText != "") {
      calValue = calValue;
      memoryStatus = 1;
  }
  if (memoryStatus == 1) {
      document.getElementById("memory-clear").style.opacity = "1";
      document.getElementById("memory-recall").style.opacity = "1";
  }
  calculationDiv.innerText = "";
}
  