let a=prompt("Enter a number:");
let arr=[];
for(let i=1;i<=a;i++){
    arr[i-1]=i;
}
console.log(arr);

let sumArr=arr.reduce((pre,result)=>{
    return (pre+result);
})
console.log(sumArr);

let mularr=arr.reduce((pre,result)=>{
return(pre * result);
})
console.log(mularr);
