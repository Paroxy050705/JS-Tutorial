let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val);
    
})


//2nd process
let num=[6,7,8,9,10];
square(num);
function square (num){
    console.log(num * num);
    
}
num.forEach(square);