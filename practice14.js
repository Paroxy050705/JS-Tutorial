
let b=document.createElement("button");
console.log(b);
b.innerText="Click me";
b.style.backgroundColor="red";
b.style.color="white";
let d=document.querySelector("body");
 let p=d.prepend(b);
 console.log(p);