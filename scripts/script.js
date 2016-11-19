// console.log('hello');
//
// function hello () {
//   alert ("Hello World");
// }


let userInputArr = [];
let currentNum = "";
let isRad = 1

function userInputNumber (value) {
        // userInputArr.push(Number(value));
        currentNum += (value)
        console.log(userInputArr, currentNum);
        document.querySelector('.display').innerHTML = currentNum;
        console.log(userInputArr, currentNum);
  }


function userInputSymbol (value) {
  userInputArr = userInputArr.filter(e => e != "");
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

    if (operator === "√") {
      let answer = Math.sqrt(number1)
        return answer;
    }

    if (operator === "∛") {
      let answer = Math.pow(number1, (1 / 3))
        return answer;
    }

    if (operator === "a³") {
      let answer = Math.pow(number1, 3)
        return answer;
    }

    if (operator === "log") {
      let answer = Math.log(number1)
        return answer;
    }

    if (operator === "sin") {
      if (isRad === 1) {
        let answer = Math.sin(number1);
      }
      else {
        let answer = Math.sin(number1 * Math.PI/180);
          return answer;
      };
    };

    if (operator === "cos") {
      if (isRad === 1) {
        let answer = Math.cos(number1);
      }
      else {
        let answer = Math.cos(number1 * Math.PI/180);
          return answer;
      };
    };

    if (operator === "tan") {
      if (isRad === 1) {
        let answer = Math.tan(number1);
      }
      else {
        let answer = Math.tan(number1 * Math.PI/180);
          return answer;
      };
    };

    // if (operator === "π") {
    //   return userInputNumber (Math.PI)
    // };
};


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

function setRad () {
  switch(isRad) {
    case 1: document.getElementById('pause').innerHTML = "pause";
    break;
    case -1: document.getElementById('pause').innerHTML = "rad";
    break;
    }
    isRad *= -1;
}
