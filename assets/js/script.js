let num1 = document.getElementById("num1")
let operator = document.getElementById("operator")

// replaces the answer box numbers and operators to normal state

function erase() {
    if (num1.innerHTML === "0") {

    } else {
        num1.innerHTML = "0"
        operator.innerHTML = ""
    }
}

// adds the correct numbers and operators in the answer box

function one() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "1"
    } else {
        num1.innerHTML += "1"
    }
}

function two() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "2"
    } else {
        num1.innerHTML += "2"
    }
}

function three() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "3"
    } else {
        num1.innerHTML += "3"
    }
}

function four() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "4"
    } else {
        num1.innerHTML += "4"
    }
}

function five() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "5"
    } else {
        num1.innerHTML += "5"
    }
}

function six() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "6"
    } else {
        num1.innerHTML += "6"
    }
}

function seven() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "7"
    } else {
        num1.innerHTML += "7"
    }
}

function eight() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "8"
    } else {
        num1.innerHTML += "8"
    }
}

function nine() {
    if (num1.innerHTML === "0") {
        num1.innerHTML = "9"
    } else {
        num1.innerHTML += "9"
    }
}

function plus() {
    if (num1.innerHTML === "0") {

    } else {
        operator.innerHTML = "+"
    }
}