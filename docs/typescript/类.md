## 类
* 相同属性和方法的一系列对象的集合，用`class`关键字定义
```
 class Person{
  name:string;
  constructor(name:string){
    this.name=name;
  }
 }

```
## 单例模式
* 保证一个类仅有一个实例，并提供一个访问它的全局访问点
* 即创建一个类，这个类只能实例化一次。

```
class Singleton{
  private static instance:Singleton;
  public static getInstance():Singleton{
    if(!this.instance){
      this.instance=new Singleton();
    }
    return this.instance;
  }
}
```
<!-- ## 工厂模式-->