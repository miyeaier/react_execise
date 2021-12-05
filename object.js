const obj = {x1: 1, y1: 2}

// 代替：
const x3 = obj.x1
const y3 = obj.y1

// 我们可以将值“解构”为普通值
// 变量：
const {x2, y2} = obj
x2 // 1
y2// 2

// 你可以到处使用它，比如函数
// 参数。注意我们如何只传递一件事
//（一个对象）到add函数中。如果函数
// 期待一个参数，它可以解构
// 参数列表中的值。
function Add(x4, y4 ) {
  return x4 + y4
 }
 console.log(Add( 1,5)); 


function Add(x4, y4 ) {
  return x4 + y4
 }
 console.log(Add({ x4: 1,y4: 5})); 

function Add({ x4, y4 }) {
 return x4 + y4
}
console.log(Add({ x4: 1,y4: 5})); 


// 如果卷曲在右边的符号上
// 表达式（等号）然后我们正在创建一个对象
const obj2 = {x6: 1, y6: 2}

// 如果他们在左侧（或接收方
// 与参数一样），然后它是解构的：
const { x6 } = obj2
x6 // 1