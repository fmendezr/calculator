let num1 = [0];
let num2 = [];
let  operator = null; 

const operate = (operand, numA = num1, numB = num2) => {
    switch (operand) {
        case "add":
            return  parseInt(numA.join("")) + parseInt(numB.join(""));
        case "subtract":
            return parseInt(numA.join("")) - parseInt(numB.join(""));
        case "multiply":
            return parseInt(numA.join("")) * parseInt(numB.join(""));
        case "divide":
            return parseInt(numA.join("")) / parseInt(numB.join("")); 
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
        });
    });

// Event listener that when operand is clicked assigs it to operator and deals with mili operator statements 
const operandbuttons = document.querySelectorAll(".operan-btn");
operandbuttons.forEach(element => {
    element.addEventListener("click", () => {
        if(num2.length == 0){
            operator = element.id;
        } else {
            num1 = ((operate(operator)).toString()).split('');
            operator = element.id;
            num2 = [];
        }
    })
})

// Event listener that deals with equal button 
const equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", () => {
    if(num2.length > 0){
        num1 = ((operate(operator)).toString()).split('');
        operator = null;
        num2 = [];
    }
})