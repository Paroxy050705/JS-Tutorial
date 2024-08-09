let a=prompt("Enter a string:");
let z=0;
vowel(a);
function vowel(a){
    for(let i of a){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'|| i=='A'|| i=='E' || i=='O' || i=='U'){
           z++; 
            
        }
        
    }
    console.log(`The number of vowels in ${a} in ${z}`);
    
}