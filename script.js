const num1 = [0];
const num2 = [0];
let  operator = null; 

const operate = (operand, num1 = num1, num2 = num2) => {
    switch (operand) {
        case "add":
            return parseInt(num1.join("")) + parseInt(num2.join(""));
        case "subtract":
            return parseInt(num1.join("")) - parseInt(num2.join(""));
        case "multiply":
            return parseInt(num1.join("")) * parseInt(num2.join(""));
        case "divide":
            return parseInt(num1.join("")) / parseInt(num2.join("")); 
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

// Event listener that when operand is clicked assigs it to operator button
const operandbuttons = document.querySelectorAll(".operan-btn");
operandbuttons.forEach(element => {
    element.addEventListener("click", () => {
        if(element.textContent === "=" && operator === null){
            console.log(parseInt(num1.join("")))
        } 
        
    })
})