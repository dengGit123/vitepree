## keyof关键字
* 主要用于获取对象类型的键的集合，把键名作为联合类型返回
## 一. 基础概念
### 1. 核心作用
* 提取对象**类型**的所有键名(**属性名**)，得到**键名字面量类型**组成的联合类型(**字符串或数字字面量的联合类型**)
```
interface Person {
  name: string;
  age: number;
}
type Keys = keyof Person; // "name" | "age"; 等价于 type Keys = "name" | "age";
```
### 2. 与`Object.keys()`的区别
* `keyof`在‌类型层面‌操作,得到的是一个联合类型，由对象类型的所有键名字面量组成联合类型
* `Object.keys()`在值层面操作，得到的是一个键名数组
## 二. 关键特性
### 1. 索引签名处理
* 当对象类型包含索引签名时，`keyof`会将索引签名的键名也考虑在内
```
interface Person {
  name: string;
  age: number;
  [propName: string]: any; // 索引签名
}
type Keys = keyof Person; // "name" | "age" | string 等价于 type Keys = "name" | "age" | string;
```
### 2. 只读属性处理
* 对于只读属性，`keyof`同样会将其键名列在联合类型中
```
interface Person {
  readonly name: string;
  age: number;
}
type Keys = keyof Person; // "name" | "age"; 等价于 type Keys = "name" | "age";
```
### 3. 可选属性的处理
* 对于可选属性，`keyof`也会将它们包括在内
```
interface Person {
  name: string;
  age?: number; // 可选属性
}
type Keys = keyof Person; // "name" | "age"; 等价于 type Keys = "name" | "age";
```
## 三. 典型应用场景
### 1. 类型安全属性访问
  * 通过泛型约束确保函数参数为对象的合法键
```
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // 安全访问
}
const user = { name: "Alice", age: 30 };
getProp(user, "name"); // 正确
getProp(user, "email"); //编译错误，因为"email"不是user的键
```
### 2. 动态校验对象属性
  *  限制函数只能操作对象存在的属性
```
function updateProp<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value; // 键和值类型均受约束
}
```
### 3. 枚举类型键提取
  * 提取枚举类型的所有键名
```
enum Status { Error = -1, Init = 0 }
type StatusKeys = keyof typeof Status; // "Error" | "Init"; 等价于 type StatusKeys = "Error" | "Init";
```
### 4. 映射类型
  * 用于创建基于对象键的类型映射
```
type ReadonlyKeys<T> = {
  [P in keyof T]: Readonly<T[P]>;
};
```
## 四. 特殊场景处理
1. ‌空对象类型
  * 对于空对象类型，`keyof`的结果是`never`
2. 原始类型
  * 对于原始类型（如`string`, `number`等），使用`keyof`会返回其包装对象的属性和方法联合类型
  * 例如，`keyof string`的结果是`number | "length" | "charAt" | ...`
  * 这是因为`keyof`实际上是针对对象类型的键名进行操作的，而不是原始类型本身。
```
type StringKeys = keyof string; // 结果是 "length" | "charAt" | ...
```
## 5. 注意事项
1. 仅作用于类型
  * `keyof`后面必须是**类型**，而不是值