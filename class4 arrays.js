let marks=[34,45,78,90,94,91,69];
console.log(marks[0]); //34
console.log(marks[6]);  //69
console.log(marks[8]);  //undefined
console.log(marks.length);  //7
marks[3]=100;
console.log(marks[3]);  //100


let heros=["Ironman","Spiserman","Hulk","Thor","Shaktimaan"];
console.log(heros.length);  //5
console.log(typeof heros);  //object


let arr=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

let num=[123,89,905,984,456,8954,346];
let i=0;
while(i<num.length){
    console.log(num[i]);
    i++;
}

//for of
let num1=[56,90,89,786,82,91,81];
for(let j of num1){
    console.log(j);
    
}
// 56
// 90
// 89
// 786
// 82
// 91
// 81

let foodItems=["Potato","Litchi","Mango","Banana"];
console.log(foodItems); //[ 'Potato', 'Litchi', 'Mango', 'Banana' ]
foodItems.push("chips","Burger","Pizza","Ice cream");  //for adding items at the end of the array
console.log(foodItems);  //[ 'Potato', 'Litchi', 'Mango', 'Banana', 'chips' ,'Burger','Pizza',  'Ice cream']
let deletedItems=foodItems.pop();  //It can delete one item from the last of the array
console.log(foodItems); //[ 'Potato', 'Litchi', 'Mango',  'Banana', 'chips',  'Burger', 'Pizza']
console.log(deletedItems);  //Ice cream
console.log(foodItems);
console.log(foodItems.toString()); //convert array to string
//Potato,Litchi,Mango,Banana,chips,Burger,Pizza

let array1=[1,2,3,4];
let array2=[5,6,7,8,9];
let array3=[10,11,12,13]
let newArray=array1.concat(array2,array3);
console.log(newArray);
//[ 1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13]
array1.shift();  //delete from start of the array
console.log(array1); //[2,3,4]
array1.unshift("100");  //add items in start 
console.log(array1); //[100,2,3,4]
console.log(array3.slice(1,3));  //[ 11, 12 ]


let x=[1,2,3,4,5,6,7,8];
x.splice(2,3,900,600,700); //startindex=2,delcount=3,newelements=900,600,700
console.log(x); //[1,2,900,600,700,6,7,8]
//Index 2 a giye next 3 te element delte kora holo









