## 索引访问类型
### 通过索引(键)动态获取对象或接口中属性的类型

### 核心概念
#### 语法形式为`Type[KeyType]`，其中：
* ``Type``: 表示对象或接口的类型
* `KeyType`: 必须是 Type 的已知键（或键的联合类型）
### 典型用法
1. 获取对象属性的类型
```
interface Person {
  name: string;
  age: number;
}
type NameType = Person["name"]; // 得到string
type AgeType = Person["age"];   // 得到number
```
2. 联合键访问
```
type PersonProp = Person["name" | "age"]; // string | number
```
3. 数组元素的类型提取
```
const users = ["Alice", "Bob"];
type User = typeof users[number]; // string
```
4. 嵌套属性访问
```
interface Company {
  CEO: { name: string; salary: number };
}
type CEOSalary = Company["CEO"]["salary"]; // number
```

### 注意事项
* 键必须是已知的: `KeyType`必须是`Typ`e的合法键，否则会报错
* 与索引签名的区别: **索引签名定义对象的结构** ;而索引访问类型是提取已有类型的**属性的类型**