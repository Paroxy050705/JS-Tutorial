//loops
let i;
for(i=1;i<=10;i++){
    console.log("Paramita");
    
}

//to calulate sum of first n numbers
// let num=prompt("Enter a number:");
// let s=0;
// for(let i=1;i<=num;i++){
//     s=s+i;
// }
// console.log("the sum of 1 to",num,"number is=",s);


//while loop
let p=1;
while(p<=6){
    console.log(p);
    p++;
    
}

//do while
let h=10;
do{
    console.log(h);
    h++;
    
}while(h<=100);

//for of loop
let str="myName";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("The size is:",size);  //6

// i=m
// i=y
// i=N
// i=a
// i=m
// i=e

//for in loop
let student={
    name:"Ram",
    roll:1,
    DOB:5,
    ispass:true,
};
for(let j in student){
    console.log("key=",j,"& value=",student[j]);
    
}
// key= name & value= Ram
// key= roll & value= 1
// key= DOB & value= 5
// key= ispass & value= true

//strings
let str1="Paramita";
console.log("The length is:",str1.length); //8
console.log(str1[3]); //a

//template literals
let sentence=`This is a template literals`;
console.log(sentence); //`` this is called backticks.
console.log(typeof sentence); //string


let obj={
    item:"pen",
    price:10,
};
console.log("The price of",obj.item,"is",obj.price,"ruppes");
//The price of pen is 10 ruppes
console.log(`The price of ${obj.item} is ${obj.price} ruppes`);
//The price of pen is 10 ruppes

let s="Paramita\tSaha";
console.log(s); //Paramita	Saha
console.log(s.length);  //13
console.log(s.toUpperCase());  //PARAMITA	SAHA
console.log(s.toLowerCase());  //paramita	saha

let j="     Pakhi     Saha";
console.log(j);  //     Pakhi     Saha
console.log(j.length); //19
console.log(j.trim()); //Pakhi     Saha
//trim starting & last er space ke trim kore baad diye dai only middle space thake...

let m="Paroxy12";
console.log(m.slice(2,8));  //roxy12


//concatination
let x="Para";
let y="mita";
console.log(x.concat(y)); //Paramita











