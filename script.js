let num1 = [0];
let num2 = [];
let  operator = null;  

//set up for display 
const display = document.getElementById("display");
display.innerHTML = num1.join("");

// make operations with two numbers
const operate = (operand, numA = num1, numB = num2) => {
    switch (operand) {
        case "add":
            return  parseInt(numA.join("")) + parseInt(numB.join(""));
        case "subtract":
            return parseInt(numA.join("")) - parseInt(numB.join(""));
        case "multiply":
            return parseInt(numA.join("")) * parseInt(numB.join(""));
        case "divide":
            if(parseInt(numB.join("")) != 0){}
            return parseInt(numA.join("")) / parseInt(numB.join("")); 
    };
};

// Add functionality to all number buttons 
const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach(element => {
     element.addEventListener("click", () => {
        if(operator === null){
            num1.push(element.textContent);
            display.innerHTML = parseInt(num1.join(""))
        } else {
            num2.push(element.textContent);
            display.innerHTML = parseInt(num2.join(""))
        };
        });
    });

// Add funcitonality to all operand buttons (+, -, *, /)
const operandbuttons = document.querySelectorAll(".operan-btn");
operandbuttons.forEach(element => {
    element.addEventListener("click", () => {
        if(num2.length == 0){
            operator = element.id;
        } else {
            num1 = ((operate(operator)).toString()).split('');
            operator = element.id;
            num2 = [];
            display.innerHTML = num1.join("");
        }
    });
});

// Add functionality to equal button
const equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", () => {
    if(num2.length > 0){
        num1 = ((operate(operator)).toString()).split('');
        operator = null;
        num2 = [];
        display.innerHTML = num1.join("");
    };
});

// Add functinoality to clear button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
    num1 = [0];
    num2 = [];
    operator = null;
    display.innerHTML = num1.join("");
});

// Add functionality to delete button 
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", () => {
    if(operator == null){
        num1 = [0];
        display.innerHTML = num1.join("");
    } else if (operand !=  null || num2.length > 0){
        num2 = [];
        display.innerHTML = 0;
    };
});
