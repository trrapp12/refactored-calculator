// console.log('hello');
//
// function hello () {
//   alert ("Hello World");
// }


let userInputArr = [];
let currentNum = "";

function userInputNumber (value) {
        // userInputArr.push(Number(value));
        currentNum += (value)
        console.log(userInputArr, currentNum);
        document.querySelector('.display').innerHTML = currentNum;
        console.log(userInputArr, currentNum);
  }


function userInputSymbol (value) {
  userInputArr.push(currentNum);
  currentNum = "";
  userInputArr.push(value);
  console.log(userInputArr, currentNum);
  document.querySelector('.display').innerHTML += value;
  console.log(userInputArr, currentNum);

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



function performOperation (number1, operator, number2) {

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

function myOnClick () {
  userInputArr.push(currentNum);
  console.log(userInputArr);
  let number1 = Number(userInputArr[0]);
  let operator = userInputArr[1];
  let number2 = Number(userInputArr[2]);

  let answer = performOperation (number1,
  operator, number2);

  console.log(answer);
  document.querySelector('.display').innerHTML = answer;
}
