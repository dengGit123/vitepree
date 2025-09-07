## this
* 运行时绑定，在**函数调用**的时候才确定this的指向
* 使用`call`,`apply`,`bind`可以改变this的指向

## 箭头函数
* 没有自己的this，arguments;
* this指向**最近父级**的作用域的this
* this不能修改
## new关键字
1. 创建一个新的空对象；
2. 将新对象的原型指向构造函数的`prototype`；
3. this指向新对象
4. 返回新对象(this)