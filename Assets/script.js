let calculationDiv = document.getElementById("calculation-div");

  function formatNumbersWithComma(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  function addChar(element) {
    let char = element.getAttribute("data-value");
    let currentValue = calculationDiv.innerText.replace(/ /g, "");
    currentValue += char;
    calculationDiv.innerText = formatNumbersWithComma(currentValue);
  }
  
  function calculate() {
    let calValue = calculationDiv.innerText.replace(/ /g, '');
    calculationDiv.innerText = formatNumbersWithComma(eval(calValue).toString());
  }

  function backspace() {
    let calValue = calculationDiv.innerText.replace(/ /g, '');
    let calValueLength = calValue.length;
    let newcalValue = calValue.substring(0, calValueLength - 1);
    calculationDiv.innerText = formatNumbersWithComma(newcalValue);
  }

  function clearScreen() {
    calculationDiv.innerText = "";
  }
  
  function plusorMinus() {
    let calVal = Number(calculationDiv.innerText.replace(/ /g, ''));
    calVal = calVal * -1;
    calculationDiv.innerText = formatNumbersWithComma(calVal.toString());
  }

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

  function cal_square() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calValue *= calValue;
    calculationDiv.innerText = formatNumbersWithComma(calValue.toString());
  }

  function cal_sqrt() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.sqrt(calValue).toString();
  }
  
  function cal_absolute() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = String(Math.abs(calValue));
  }
  
  function cal_exp() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = String(Math.exp(calValue));
  }
  
  function fixed_exp() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = formatNumbersWithComma(calValue.toExponential(3));
  }
  
  function radianToDegree() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    operationValue = operationValue * (180 / Math.PI);
    operationDiv.innerText = formatNumbersWithComma(operationValue.toString());
  }

  function cal_factorial() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    let result = 1;
    let i = 0;
    for (i = calValue; i >= 1; i--) {
        result= result *i;
    }
    calculationDiv.innerText = result.toString();
  }
  
  function cal_ten_pow() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.pow(10, calValue).toString();
  }
  
  function cal_log() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.log10(calValue).toString();
  }
  
  function cal_ln() {
    let calValue = Number(calculationDiv.innerText.replace(/ /g, ''));
    calculationDiv.innerText = Math.log(calValue).toString();
  }
 

  