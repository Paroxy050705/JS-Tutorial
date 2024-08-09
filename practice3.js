//print all even numbers from 0 to 100
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i);
        
    }
} //2 4 6 8 10 12 .....98 100


//choose a number
let num=21;
let usernum=prompt("Guess the game number:");
while(num!=usernum){
usernum=prompt("You entered wrong num.Guess again.")
}
    console.log("Congrats!!!You entered the correct number");