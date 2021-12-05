function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = "original color";
console.log(car1.color);    // original color

car1.color = 'black';
console.log(car1.color);   // black

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
console.log(car1.color)  // black
console.log(car2.color) // original color



//new 关键字会进行如下的操作：

//创建一个空的简单JavaScript对象（即{}）；
//为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
//将步骤1新创建的对象作为this的上下文 ；
//如果该函数没有返回对象，则返回this。
//译注：关于对象的 constructor，参见 Object.prototype.constructor）

//创建一个用户自定义的对象需要两步：

//通过编写函数来定义对象类型。
//通过 new 来创建对象实例。
//创建一个对象类型，需要创建一个指定其名称和属性的函数；对象的属性可以指向其他对象，：
//####简而言之 new 之后的定义的函数你可以调用以前定义的函数比如上面的car 但new car 代表可以用以前的函数来写新代码
