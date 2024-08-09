// let div=document.querySelectorAll(".box");
// console.dir(div);
// div[0].innerText="New 1";
// div[1].innerText="New 2";
// div[2].innerText="New 3";

let div=document.querySelectorAll(".box");
let i=1;
for(let d of div){
    d.innerText=`New ${i}`;
    i++;
}