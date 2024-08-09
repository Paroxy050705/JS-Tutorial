let arr=[250,645,300,900,50];
let len=arr.length;
let s=0;
for(let i=0;i<len;i++){
    s=arr[i]-(arr[i]*10/100);
    console.log(`The ${i+1}st price is:${s}`);
    
}
// The 1st price is:225
// The 2st price is:580.5
// The 3st price is:270
// The 4st price is:810
// The 5st price is:45

