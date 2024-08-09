alert("Welcome");

//For accessing html tags through JS we can use DOM(Document Object Model)
//For dynamic changes in our webpages,we can use DOM.
console.log(window.document);
//here window is browser's object which is global object.
//It prints html code

console.dir(window.document);
//It prints all objects of window

console.dir(document.head);
//It prints objects of head tag from html

console.dir(document.body);
//It prints objects of body tag from html


//For access code we use console.log
//For access objects we use console.dir

let h=document.getElementById("heading");
console.dir(h);

let j=document.getElementsByClassName("myClass");
console.dir(j);

let k=document.getElementsByTagName("p");
console.dir(k);

let l=document.querySelector("h1");
console.dir(l);

let m=document.querySelectorAll("h1");
console.dir(m);
