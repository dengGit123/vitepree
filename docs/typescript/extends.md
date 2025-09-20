## extends关键字
   * 约束类型结构
## 一. 泛型约束
1. 限制类型参数范围
   确保泛型参数符合特定**类型结构**
```
function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}
//该例中T必须包含length属性

```
2. 多重约束
   可以同时约束多个类型
```
function mergeProps<T extends { a: number } & { b: string }>(obj: T) {
  return obj.a + obj.b.length;
}
//要求T同时满足两个接口的结构
```
## 二. 类型继承
1. 接口继承
   支持单继承或多继承（合并多个接口）,一个接口可以继承另一个接口，从而扩展其属性或方法。
```
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
//子接口自动包含父接口的成员
```
2. 类继承
   支持单继承，一个类可以继承另一个类的属性和方法。
```
class Animal { move() {} }
class Dog extends Animal { bark() {} }
```
## 三. 条件类型
1. 类型判断
   * 类似三元运算符的类型逻辑：
   * 如果是泛型，会泛型中每一个类型都会单独去比较条件。
   * 如果不是泛型，则会直接比较条件。
```
// 会得到never, 因为是 `string | number`整体和`string | number | boolean`比较，显然前者不是后者的子类型。
type a = string | number extends string | number | boolean ? string : never; 

type a<T> = T extends string | number ? T : never;
//会得到string | number, 因为是泛型，所以每个类型都会单独去比较条件。
type a1 = a<string | number> // string | number


```
```
type IsString<T> = T extends string ? true : false;
//判断T是否为string的子类型
```
2. 分布式条件类型
   联合类型会触发分布式计算
   * 当T为联合类型时，每个成员都会独立计算条件类型，即**T**的每一个类型，都会单独去比较条件。
```
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArr = ToArray<string | number>; // string[] | number[]
//每个联合类型成员独立计算;即等价与 type StrOrNumArr = ToArray<string> | ToArray<number>;
```