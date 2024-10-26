

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return "ERROR";}
    else{
        return a/b;
    }
}

const operations={
    '+': add,
    '-': subtract,
    'X': multiply,
    '/': divide,
};

const display= document.querySelector(".display");
const numberButtons= document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

let num1=0;
let num2=0;
let operation=null;
let operationPressed= false;
let sign= null;


const maxDisplayLength= 9;

function appendDisplay(num){
    // if(operationPressed){
    //     operationPressed= false;
    //     display.textContent="";
    // }

    if(display.textContent.length <maxDisplayLength){
        display.textContent += num;
    }
}

function pressOperation(oper) {
    if(operationPressed) return;
    sign=oper;
    num1 = display.textContent;
    appendDisplay(oper);
    operation = operations[oper];
    operationPressed = true;
    
    
} 

function clearDisplay() {
    display.textContent = '';
    num1 = 0;
    num2 = 0;
    operation = null;
    operationPressed = false;
} 

function operate() {
    let temp="";
    console.log(num1,operation,num2);
    
    if (!operation) return;
    for(i=display.textContent.indexOf(sign)+1;i<=display.textContent.length-1;i++){
         temp = temp+ display.textContent[i];
        num2= parseInt(temp);  
    }
    
    const result = operation(+num1, +num2);
    display.textContent = result;
    num1 = result;
    operation = null;
    num2 = 0;
    console.log(num1,operation,num2);
    operationPressed=false;
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendDisplay(button.textContent));
})

clearButton.addEventListener('click', clearDisplay);

operationButtons.forEach((button)=>{
    button.addEventListener('click',()=> pressOperation(button.textContent));
})

equalButton.addEventListener('click', operate);