const num1 = [];
const num2 = [];
const  operator = '/'; 

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
            if(operator === null){
                num1.push(element.textContent);
            } else {
                num2.push(element.textContent)
            }
            console.log(num1)
            console.log(num2)
        })
    })
}

drugs()