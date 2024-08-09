console.log("hello");
//hello

let a="abc".toUpperCase();
console.log(a);
//ABC

let arr1=[1,2,3,4];
arr1.push(5);
console.log(arr1);
//[ 1, 2, 3, 4, 5 ]

//Here log & touppercase & push are functions which are already written in JS.

//function


//function definition
function myFunction(){
    console.log("Welcome here");
    console.log("Now I am learning JS."); 
}

//function calling
myFunction();


//function 2
function myFunction2(hello,n){ //Parameter ==> input
    console.log(hello);
    console.log(n);
    
    
}
myFunction2("I love JS","Hi"); //argument

//I love JS

//function 3
let p,m;

//calling
callFunction(p,m);  //arguments

//definition
function callFunction(p,m){ //parameters
    console.log("Hi");
    console.log("I am Paramita Saha");
    
    
}

//sum of 2 no
let x=Number(prompt("Enter a number:"));
let y=Number(prompt("Enter 2nd number:"));
sum(x,y);
function sum(x,y){
    let z=x+y;
    console.log(`The sum of ${x} & ${y} is ${z}`);
}


//arrow function

const add=(x,y)=>{
    z=x+y;
    console.log ("z="+z);
    return z;
    console.log(z);// return er pore kichu kaj kore nah

}

const arrowmul=(a,b)=>{
    console.log(a*b);
    
}
