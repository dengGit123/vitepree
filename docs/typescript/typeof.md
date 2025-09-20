## typeof的作用
* 用于获取一个变量或对象的类型
* typeof操作符从值中推出类型
## 检测范围
* 变量
* 对象
```
// 'string','number','boolean','symbol','bigint','undefined','object','function'
```
## 使用场景
## ‌一. 基本数据类型推导
1. **基本数据类型**: 对变量使用`typeof`可推导出对应的TS类型，如`string`、`number`等

```
const str = 'hello';
type StrType = typeof str;  // 推导为string类型
```
2. **对象类型**‌：能完整捕获对象的结构类型，包括嵌套属性
```typescript
const obj = { name: 'Alice', age: 25 };
type ObjType = typeof obj;  // { name: string; age: number }
```

## 二. 函数与类类型处理
1. **函数类型**‌：可提取函数签名，包括参数和返回值类型
```typescript
function greet(name: string) { return `Hello, ${name}`; }
type GreetType = typeof greet;  // (name: string) => string
```
2. **类构造函数**‌：通过typeof获取类的构造签名，用于工厂函数类型校验
```typescript
class Point { x: number; y: number; }
type PointConstructor = typeof Point;
```
## 三. 进阶应用场景
1. **联合工具类型**‌：与`keyof`结合实现字段校验或生成映射类型
```typescript
const config = { host: 'localhost', port: 3306 };
type ConfigKeys = keyof typeof config;  // "host" | "port"
```
2. **枚举类型处理**‌：配合``keyof``获取枚举键的字面量联合类型
```typescript
enum Color { Red, Green }
type ColorKeys = keyof typeof Color;  // "Red" | "Green"
```
## 四. 注意事项
1. **编译时特性**‌：``typeof``在TS中仅作用于类型上下文，与**JS**运行时`typeof`行为不同
2.**类型精确性**‌：对null推导为null类型，而JS中返回"object"