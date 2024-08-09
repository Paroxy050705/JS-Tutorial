let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(company);
company.shift();
console.log(company);
company.splice(1,1,"Ola");
console.log(company);
company.push("Amazon");
console.log(company);

//[ 'Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]
// [ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]
// [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix' ]
// [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon' ]




