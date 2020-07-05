//Impure function
const minAge = 20
function isEligible1(age){
  return age > minAge;
}

//Pure function
function isEligible2(age,minAge){
  return age > minAge;
}

console.log(isEligible1(21))
console.log(isEligible2(21, 19))