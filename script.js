const num1 = [];
const num2 = [];
let  operator = null; 

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

// Event listener that when number is clicked assigns its value to num1/num2
const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach(element => {
     element.addEventListener("click", () => {
        if(operator === null){
            num1.push(element.textContent);
        } else {
            num2.push(element.textContent);
        };
        console.log(num1)
        console.log(num2)
        });
    });

// Event listener that when operand is clicked assigs it to operator button
const operandbuttons = document.querySelectorAll(".operan-btn");
operandbuttons.forEach(element => {
    element.addEventListener("click", () => {
    })
})