let calculationDiv = document.getElementById("calculation-div");
  
/** 
* @description convert input string into comma seperated value
* @function formateNumberWithComma(inputString)
* @param {string} inputString :- which is in normal form
* @return {string} outputString :- comma seperated value of given string
*/
  function formatNumbersWithComma(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

/** 
* @description generate maths eqution to eval.  
* @function addChar(element : html-element)
* @param {html-element} element :- it is a value assoiated with button */

  function addChar(element) {
    let char = element.getAttribute("data-value");
    let currentValue = calculationDiv.innerText.replace(/,/g, "");
    currentValue += char;
    calculationDiv.innerText = formatNumbersWithComma(currentValue);
  }

/** 
 * @function calculate()
 * @description it will calculate the math equation and give output */
  function calculate() {
    let calValue = calculationDiv.innerText.replace(/,/g, '');
    calculationDiv.innerText = formatNumbersWithComma(eval(calValue).toString());
  }

/** 
 * @function backSpace()
 * @description it remove the last character from the input string */ 
  function backSpace() {
    let calValue = calculationDiv.innerText.replace(/,/g, '');
    let calValueLength = calValue.length;
    let newcalValue = calValue.substring(0, calValueLength - 1);
    calculationDiv.innerText = formatNumbersWithComma(newcalValue);
  }

/** 
 * @function clearScreen()
 * @description it clear outputbox(display part)*/
  function clearScreen() {
    calculationDiv.innerText = "";
  }

/** 
 * @descriptionit change sign of current input (like plus to minus/ minus to plus)
 * @function plusorMinus() */
  function plusorMinus() {
    let calVal = Number(calculationDiv.innerText.replace(/,/g, ''));
    calVal = calVal * -1;
    calculationDiv.innerText = formatNumbersWithComma(calVal.toString());
  }

/**
 * @description trigonometry function to calculate sin,cos,tan,cot,sec,cosec
 * @function trigonometry(function name) */
  function trigonometry(fun) {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
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
            break; }
        calculationDiv.innerText = formatNumbersWithComma(result.toString());
  }

/**
 * @description calculate the specified math function's value 
 * @function mathFunction(function_name : string)*/
  function mathFunction(functionName) {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
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

/**
 * @function cal_square()
 * @description calculate the square of the given input value  */
  function cal_square() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calValue *= calValue;
    calculationDiv.innerText = formatNumbersWithComma(calValue.toString());
  }

/** 
 * @function cal_sqrt()
 * @description calculate the square root of the given input */
  function cal_sqrt() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.sqrt(calValue).toString();
  }
 
/** 
 * @function cal_absolute() 
 * @description calculate the absolute value of given input */ 
  function cal_absolute() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = String(Math.abs(calValue));
  }
 
/**
 * @function cal_exp()
 * @description calculate the exponent value of the given value */
  function cal_exp() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = String(Math.exp(calValue));
  }
  
/** 
 * @function fixedExp()
 * @description fixed value with exponent values */
  function fixedExp() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = formatNumbersWithComma(calValue.toExponential(3));
  }

/**
 * @function radianToDegree()
 * @description convert given radiad value into degree */
  function radianToDegree() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calValue = calValue * (180 / Math.PI);
    calculationDiv.innerText = formatNumbersWithComma(calValue.toString());
  }

/** 
 * @function cal_factorial()
 * @description calculate the factorial value of the given value */
  function cal_factorial() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    let result = factorial(calValue);
    function factorial(calValue)
    {
      if (calValue==1)
        return 1;
      else 
        return calValue* factorial(calValue-1);
    }
    /*for (let i = calValue; i >= 1; i--) {
        result= result *i;
    }*/
    calculationDiv.innerText = result.toString();
  }
  
/**
 * @function cal_ten_pow() 
 * @description calculate the value of the power of 10 */
  function cal_ten_pow() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.pow(10, calValue).toString();
  }

/** 
 * @function cal_log()
 * @description calculate the logerithmic value base 10 and display result */
  function cal_log() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.log10(calValue).toString();
  }

/** 
 * @function cal_ln() 
 * @description calculate the logerithmic value base e and display result */ 
  function cal_ln() {
    let calValue = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.log(calValue).toString();
  }
 

/** @description MC, MR, M+, M-, MS Memory functions */
 let memoryValue = 0; /** @description  memoryvalue is a memory  which store the memory value */
 let memoryStatus = 0; /** @description memorystatus flag is used whether memory is present or not */

/** 
 * @description clear  memory values
 * @function memoryClear() */
function memoryClear() {
  memoryValue = 0;
  memoryStatus = 0;
  if (memoryStatus == 0) {
      document.getElementById("memory-clear").style.opacity = "0.2";
      document.getElementById("memory-recall").style.opacity = "0.2";
  }
}

/**
 * @description calculate the value of memory values and display
 * @function memoryRecall() */
function memoryRecall() {
  calculationDiv.innerText = formatNumbersWithComma(memoryValue.toString());
}

/** 
 * @description add the input value to the memory stack
 * @function memoryPlus() */
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

/** 
 * @description reduse memory value by the givan value
 * @function memoryMinus() */
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

 /**
  * @description put the input value into the memory stack
  * @function memorySave() */
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
  