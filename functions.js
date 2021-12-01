// Function Declaration
function getName1() {
  return 'Thomas'
}
console.log(getName1());// call function的时候别忘了带括号（）


// Function Expression
const getName2 = function() {
  return 'Thomas'
}
console.log(getName2());

// Arrow Function (Which is also an expression)
const getName3 = () => {
  return 'Thomas'
}
console.log(getName3());




const getName = () => { 
  return 'Thomas' 
} 

// 同上但更紧凑
const getName = () => 'Thomas'