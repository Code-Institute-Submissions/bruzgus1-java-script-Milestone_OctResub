let num1 = document.getElementById("num1")
let operator = document.getElementById("operator")
let num2 = document.getElementById("num2")
let answer = document.getElementById("answer")
// replaces the answer box numbers and operators to normal state

function erase() {
    if (num1.innerHTML === "0") {

    } else {
        num1.innerHTML = "0"
        operator.innerHTML = ""
        num2.innerHTML = ""
        answer.innerHTML = ""
        window.location.reload(true)
    }
}

// adds the correct numbers in the answer box

function zero() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {

        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "0"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "0."
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "0"
            }
        }
    }
}

function one() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "1"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "1"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "1"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "1"
            }
        }
    }
}

function two() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "2"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "2"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "2"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "2"
            }
        }
    }
}

function three() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "3"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "3"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "3"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "3"
            }
        }
    }
}

function four() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "4"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "4"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "4"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "4"
            }
        }
    }
}

function five() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "5"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "5"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "5"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "5"
            }
        }
    }
}

function six() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "6"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "6"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "6"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "6"
            }
        }
    }
}

function seven() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "7"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "7"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "7"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "7"
            }
        }
    }
}

function eight() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "8"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "8"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "8"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "8"
            }
        }
    }
}

function nine() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "9"
        } else {
            if (num1.innerHTML.length <= 5) {
                num1.innerHTML += "9"
            }
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "9"
        } else {
            if (num2.innerHTML.length <= 5) {
                num2.innerHTML += "9"
            }
        }
    }
}
// add correct operators in the answer box

function plus() {
    if (num1.innerHTML === "0") {

    } else {
        operator.innerHTML = "+"
    }
}

function minus() {
    if (num1.innerHTML === "0") {

    } else {
        operator.innerHTML = "-"
    }
}

function multiply() {
    if (num1.innerHTML === "0") {

    } else {
        operator.innerHTML = "x"
    }
}

function divide() {
    if (num1.innerHTML === "0") {

    } else {
        operator.innerHTML = "÷"
    }
}

function decimal() {

    if (num1.innerHTML.includes(".")) {

    } else {
        num1.innerHTML += "."
    }

    if (operator.innerHTML === "") {

    } else if (num2.innerHTML.includes(".")) {

    } else {
        num2.innerHTML += "."
    }
}

// calculated the correct answer
function calculateAnswer(num1, num2) {
    let number1 = parseFloat(document.getElementById("num1").textContent);
    let number2 = parseFloat(document.getElementById("num2").textContent);

    if (operator.innerHTML === "+") {
        document.getElementById("answer").innerHTML = parseFloat((number1 + number2).toFixed(2));

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "-") {
        document.getElementById("answer").innerHTML = parseFloat((number1 - number2).toFixed(2))

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "x") {
        document.getElementById("answer").innerHTML = parseFloat((number1 * number2).toFixed(2));

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "÷") {
        document.getElementById("answer").innerHTML = parseFloat((number1 / number2).toFixed(2));

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else {

    }

}

// squares the presented numbers

function squared() {
    let number1 = parseFloat(document.getElementById("num1").textContent);
    let number2 = parseFloat(document.getElementById("num2").textContent);

    if (operator.innerHTML === "") {
        document.getElementById("answer").innerHTML = Math.pow(number1, 2);

        num1 = document.getElementById("num1").innerHTML = ""
    } else if (operator.innerHTML === "+") {
        document.getElementById("answer").innerHTML = Math.pow((number1 + number2), 2);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "-") {
        document.getElementById("answer").innerHTML = Math.pow((number1 - number2), 2);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "x") {
        document.getElementById("answer").innerHTML = Math.pow((number1 * number2), 2);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "÷") {
        document.getElementById("answer").innerHTML = Math.pow((number1 / number2), 2);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else {

    }
}

// cubes the presented numbers

function cubed() {
    let number1 = parseFloat(document.getElementById("num1").textContent);
    let number2 = parseFloat(document.getElementById("num2").textContent);

    if (operator.innerHTML === "") {
        document.getElementById("answer").innerHTML = Math.pow(number1, 3);

        num1 = document.getElementById("num1").innerHTML = ""
    } else if (operator.innerHTML === "+") {
        document.getElementById("answer").innerHTML = Math.pow((number1 + number2), 3);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "-") {
        document.getElementById("answer").innerHTML = Math.pow((number1 - number2), 3);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "x") {
        document.getElementById("answer").innerHTML = Math.pow((number1 * number2), 3);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else if (operator.innerHTML === "÷") {
        document.getElementById("answer").innerHTML = Math.pow((number1 / number2), 3);

        num1 = document.getElementById("num1").innerHTML = ""
        operator = document.getElementById("operator").innerHTML = ""
        num2 = document.getElementById("num2").innerHTML = ""

    } else {

    }
}