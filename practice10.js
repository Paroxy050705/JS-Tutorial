//marks of a student are given & find which marks are greater than 90

arr=[90,98,96,57,79,84];
let newArr=arr.filter((val)=>{
    return val>90;
})
console.log(newArr);