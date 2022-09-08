const num1 = [];
const num2 = [];
const  operator = undefined; 

const operate = (operand, num1, num2) => {
    switch (operand) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
    };
};

const numBtns = document.querySelectorAll(".num-btn");
const multiply = document.getElementById("multiply");

const drugs = () => {
    numBtns.forEach(element => {
        element.addEventListener("click", () => {
        })
        console.log(element.textContent)
    })
}

drugs()