var name = 'Thomas'
if (true) {
  var name = 'Oliver'
   console.log(name);
 // 'Oliver'
}
console.log(name);


// let has block scope
let name1 = 'Thomas'
if (true) {
  let name1 = 'Oliver'
 console.log(name1);
}
console.log(name1);

// const has block scope too
const name2= 'Thomas'
if (true) {
  const name2 = 'Oliver'
  console.log('name2:',name2);
}


// let can be reassigned
let isOpen1 = true
isOpen1= false
isOpen1// false

// const cannot be reassigned
const isOpen = true
//isOpen3 = false // throws error

//const list

const list1 = [11,'2012']
console.log('list:',list1);
// 我们不能写没有引号的任何词汇 如果要写就必须要定义 ，⬇️也可以有空白出现“
const list = [11,,'2012']
console.log('list:',list);
list.push('tomas')//const 不能被重新定义但可以用.push 来给已经定义过的数组array里加任何你想要加的东西
console.log(list);