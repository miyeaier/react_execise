function myModule() {
  this.hello = function() {
    return 'hello!';
  }

  this.goodbye = function() {
    return 'goodbye!';
  }
}

module.exports = myModule;

//我们使用特殊的对象模块并将我们的函数引用放入module.exports。这让 CommonJS 模块系统知道我们想要公开什么，以便其他文件可以使用它。

//然后当有人想要使用myModule 时，他们可以在他们的文件中要求它，如下所示：

var myModule = require('myModule');

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'

//与我们之前讨论的模块模式相比，这种方法有两个明显的好处：

//1. 避免全局命名空间污染
//2. 明确我们的依赖
