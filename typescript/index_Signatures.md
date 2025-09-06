## 索引签名： 用于定义对象动态属性的类型机制，允许开发者指定对象的键类型和值类型
### 一、基本语法
```
 interface InterfaceName{
  [key: keyType]:valueType // 索引签名: keyType只能是string,number,symbol; valueType可以是任意类型;

 }
```
### 二、主要类型
#### 1. 字符串索引签名：适用于动态字符串键的对象
```
interface StringIndexed {
  [prop:string]: string;
}

const dict: StringIndexed = { name: "Alice" }; // 合法
dict.age = "30"; // 合法
```
#### 2. 数字索引签名：常用于类数组结构
```
interface NumArray {
  [index: number]: string;
}
const arr: NumArray = ["a", "b"]; // 合法
```
### 使用场景
1. 动态属性对象:不确定属性名的对象
2. ‌混合类型属性: 结合已知属性和动态属性时，需确保已知属性类型兼容索引签名类型

### 注意事项
* 若同时存在明确属性和索引签名,已知属性的类型必须是索引值类型的子类型(即索引签名的类型要兼容已知属性的类型)
* 数字索引的返回值类型需兼容字符串索引类型（因 JavaScript 会隐式转换数字键为字符串）
##### 当接口同时包含数字索引签名和字符串索引签名时，数字索引的返回值类型必须兼容字符串索引的返回值类型。这是因为 JavaScript 在运行时会将数字索引隐式转换为字符串索引
```
//数字索引的返回值类型必须是字符串索引返回值类型的子类型
interface MixedInterface {
  [index: number]: string;  // 合法，因为 string 是 any 的子类型
  [key: string]: any;
}
//若违反此规则（如数字索引返回 number 而字符串索引返回 string），会导致类型冲突错误
```