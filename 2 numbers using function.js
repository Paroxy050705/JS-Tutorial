let a=Number(prompt("Enter a number:"));
let b=Number(prompt("Enter 2nd number"));
sum(a,b);
multiply(a,b);
subtraction(a,b);
division(a,b);

function sum(a,b){
    let z=a+b;
    console.log(`The sum of ${a} & ${b} is ${z}`);
    
}
function subtraction(a,b){
    let z=a-b;
    console.log(`The subtraction of ${a} & ${b} is ${z}`);
    
}
function multiply(a,b){
    let z=a*b;
    console.log(`The multiply of ${a} & ${b} is ${z}`);
    
}
function division(a,b){
    let z=a/b;
    console.log(`The division of ${a} & ${b} is ${z}`);
    
}