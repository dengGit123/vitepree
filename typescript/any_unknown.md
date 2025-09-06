---
lang: zh-CN
layout: doc
---
## any,unknown的区别和应用场景 {#sort}
#### 相同点：
   1. any和unknown都可以接收任何类型的值
#### 不同点： 
   1. any类型的变量可以被赋予任何类型；而unknown类型的变量只能被赋值给any类型和unknown类型的变量
   2. unknown类型的变量不能直接调用任何方法；也不能直接访问其属性；而any类型的变量可以直接调用方法和访问属性
#### any的应用场景:建议通过 tsconfig.json 启用 noImplicitAny 配置，强制显式声明 any 以减少误用

1. 第三方库交互: any 可临时绕过类型检查
```
declare const legacyLib: any;
const result = legacyLib.getData(); // 动态数据暂用any处理
```
2. API 响应解析 : 解析结构未知的 JSON 数据时，any 允许直接操作响应结果
```
async function fetchData(url: string): Promise<any> {
  return (await fetch(url)).json();
}
```
3. 动态类型变量: 存储可能变更类型的变量时
```
let dynamicValue: any = 100;
dynamicValue = "Now a string"; // 允许类型变更
````
4. 混合类型集合: 存储多种类型数据时，使用any可以避免额外的类型定义
```
const mixedArray: any[] = ["text", 42, { key: "value" }];
```


#### unknown的应用场景
1. 禁止直接操作: 禁止任何属性和方法的访问，必须通过类型检查或断言后才能使用
```
let value: unknown = 'hello';
//value.length; // 错误，不能直接访问属性

```
2. 类型守卫: 通过typeof,instanceof缩小范围
```
if(typeof value === 'string'){
  console.log(value.length); // 正确，通过类型守卫缩小了范围

}
```
3. 处理外部数据: 解析JSON或API响应时，外部数据类型不确定，优先声明为unknown 再验证
```
const data: unknown = awit response.json(); // 外部数据类型不确定，声明为unknown

if(typeof data === 'object' && data !== null){
  console.log(data.name); // 正确，通过类型守卫缩小了范围
}

```
4. 联合与交叉类型
```
type T = unknown | string; // 结果为unknown。 unknown 与其他类型的联合类型结果始终为unknown（除any外）

type T = unknown & string; // 结果为string。 unknown 与其他类型的交叉类型结果始终为该类型(目标类型)（除any外）

```

