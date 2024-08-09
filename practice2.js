let a=prompt("Enter a number:");
if(a%5==0){
    console.log("The num",a,"is a multiple of 5");    
}
else{
    console.log("The num",a,"is not a multiple of 5");
    
}

//2nd question
let marks=prompt("Enter marks:");
if(marks<=100 && marks>=90)
{
    console.log("Grade A");
    
}
else if(marks<=89 && marks>=70)
{
    console.log("Grade B");
    
}
else if(marks<=69 && marks>=60){
    console.log("Grade C");
    
}
else if(marks<=59 && marks>=50){
    console.log("Grade D");
    
}
else if(marks<=49 && marks>=0){
    console.log("Grade F");
    
}
else{
    console.log("Fail");
    
}


//for seeing output at first making a html page then link the page using sript tag the open the page via file then inspect the page the went to the console option & seing the output



//here index2.html page is connected with this page & you can inspect the index2.html page then see the output in console.
