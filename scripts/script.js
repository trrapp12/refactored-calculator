console.log('hello');

function hello () {
  alert ("Hello World");
}



function userInputNumber (value) {
  let userInputNumberArr = [];
  userInputNumberArr.push(Number(value));
  // document.getElementByClass('display').innerHTML = userInputNumberArr;
  console.log(userInputNumberArr);

}

function userInputSymbol (value) {
  let userInputSymbolArr = []
  arr.push(value);
  console.log(arr);
}

// function getUserInput () {
//     let number1 =
//
//     let operator =
//
//     let number2 =
//
//     return performOperation (number1, number2, operator);
//   }

// getUserInput();

function performOperation (number1, number2, operator) {
    if (operator === "+") {
      let answer = add (number1, number2);
        return answer;
  }
    if (operator === "-") {
      let answer = subtract (number1, number2);
        return answer;
  }

    if (operator === "*") {
      let answer = multiply (number1, number2);
        return answer;
  }

    if (operator === "/") {
      let answer = divide (number1, number2);
        return answer;
    }
}


function add (number1, number2) {
  return (number1 + number2);
}

function subtract (number1, number2) {
  return (number1 - number2);
}

function multiply (number1, number2) {
  return (number1 * number2);
}

function divide (number1, number2) {
  return (number1 / number2);
  }
