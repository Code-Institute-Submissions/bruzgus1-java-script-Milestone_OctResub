let num1 = document.getElementById("num1")
let operator = document.getElementById("operator")
let num2 = document.getElementById("num2")

// replaces the answer box numbers and operators to normal state

function erase() {
    if (num1.innerHTML === "0") {

    } else {
        num1.innerHTML = "0"
        operator.innerHTML = ""
        num2.innerHTML = ""
    }
}

// adds the correct numbers in the answer box

function zero() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {

        } else {
            num1.innerHTML += "0"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "0."
        } else {
            num2.innerHTML += "0"
        }
    }
}

function one() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "1"
        } else {
            num1.innerHTML += "1"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "1"
        } else {
            num2.innerHTML += "1"
        }
    }
}

function two() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "2"
        } else {
            num1.innerHTML += "2"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "2"
        } else {
            num2.innerHTML += "2"
        }
    }
}

function three() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "3"
        } else {
            num1.innerHTML += "3"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "3"
        } else {
            num2.innerHTML += "3"
        }
    }
}

function four() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "4"
        } else {
            num1.innerHTML += "4"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "4"
        } else {
            num2.innerHTML += "4"
        }
    }
}

function five() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "5"
        } else {
            num1.innerHTML += "5"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "5"
        } else {
            num2.innerHTML += "5"
        }
    }
}

function six() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "6"
        } else {
            num1.innerHTML += "6"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "6"
        } else {
            num2.innerHTML += "6"
        }
    }
}

function seven() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "7"
        } else {
            num1.innerHTML += "7"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "7"
        } else {
            num2.innerHTML += "7"
        }
    }
}

function eight() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "8"
        } else {
            num1.innerHTML += "8"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "8"
        } else {
            num2.innerHTML += "8"
        }
    }
}

function nine() {
    if (operator.innerHTML === "") {
        if (num1.innerHTML === "0") {
            num1.innerHTML = "9"
        } else {
            num1.innerHTML += "9"
        }
    } else {
        if (num2.innerHTML === "") {
            num2.innerHTML = "9"
        } else {
            num2.innerHTML += "9"
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
    if (num1.innerHTML === "0") {
        num1.innerHTML += "."
    } else {

    }
}