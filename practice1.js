//1st question
const pen={
    name:"Parker Jotter Standard CT Ball Pen",
    color:"Black",
    price:270,
    discount:5,
};
console.log(pen);
// {
//     name: 'Parker Jotter Standard CT Ball Pen',
//     color: 'Black',
//     price: 270,
//     discount: 5
//   }

console.log(pen.name);  //Parker Jotter Standard CT Ball Pen
console.log(pen["color"]);  //black

console.log(pen.discount); //5
pen["discount"]=pen["discount"]+5;  //5+5=10
console.log(pen.discount); //10

console.log(pen["price"]); //270
pen["price"]=pen["price"]-100;  //270-100=170
console.log(pen["price"]); //170


//2nd question
const profile={
    name:"Paramita Saha",
    numberOfPosts:195,
    isFollow:true,
    noOfFollowing:4,
    email:"paromita05072005@gmail.com",
    work:"web developer",
};
console.log(profile);
// {
//     name: 'Paramita Saha',
//     numberOfPosts: 195,
//     isFollow: true,
//     noOfFollowing: 4,
//     email: 'paromita05072005@gmail.com',
//     work: 'web developer'
 // }

console.log(typeof profile);  //object
console.log(profile["name"]); //Paramita saha
(profile["noOfFollowing"])=(profile["noOfFollowing"])+3;
console.log(profile["noOfFollowing"]); //7


