//Arithmetic operators
let a=2;
let b=3;
console.log("a+b=",a+b); //5
console.log("a-b=",a-b);  //-1
console.log("a*b=",a*b);  //6
console.log("a/b=",a/b); //0.66666666666666666
console.log("a**b=",a**b); //8
console.log("a%b=",a%b); //2
console.log("a++=",a++);  //2 age print hoi tarpor +1 hoi
console.log("a=",a); //a=2+1=3
console.log("++a=",++a); //4 age barbe tarpor print hoi

//assignment operators
let x=4;
x+=2; //x=x+2
console.log("x=",x) //6
let y=5;
y*=3; //y=y*3
console.log("y=",y); //15


//comparison operators
let m=4;
let n=5;
console.log("4==5 ==>",m==n); //false
console.log("4!=5 ==>",m!=n); //true
console.log("4<=5",m<=n); //true
console.log("4>=5",m>=n); //false

let k=5;
let c="5";
console.log("5==5",k==c); //it checks value only //true  
console.log("5===5",k===c); //It checks data type & value  //false 

//logical operator

//and operator
let r=3;
let t=5;
let con1=r==t; //false
let con2=r>t; //false
console.log(con1 && con2); //false


//or operator
let u=2;
let v=7;
let co1 =u==v; //false=0
let co2=u<=v; //true=1
console.log(co1||co2); //  0||1=1=true

//logical not
let p=2;
let q=3;
console.log(!(p==q));  //true

//conditional statements
let age=100;
if(age>=18)
{
    console.log("You can Vote");
    
}
else
{
    console.log("You can not vote");
    
}
//You can vote

let mode="dark";
let color;
if(mode="dark")
{
    color="black";
}
else{
    color="white";
}
console.log("The background color is:",color);  //black

let num=86;
if(num%2==0){
    console.log("The Number is even");
}
else{
    console.log("The number is odd");
}
//The number is even.


//else if statements
let roll=100;
if(roll==1){
    console.log("Good student");
    
}
else if(roll>1 && roll<20){
    console.log("middle level student");
    
}
else if(roll>21 && roll<40){
    console.log("average student");
    
}
else{
    console.log("Bad student");
    
}
//bad student


//ternary operator
let calculate;
let marks=100;
calculate=marks>200?"Good":"Bad";
console.log(calculate); //bad







