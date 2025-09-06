## 为什么要用声明文件：
* **声明文件中只能声明类型，不能实现逻辑。**

1. 使用第三方库的类型或使用集成库时，如果没有声明文件，就无法使用类型检查。比如： axios、lodash等,需要声明文件来告诉ts编译器如何识别这些库的类型。
2. 在编译成js文件可以自动生成声明文件(.d.ts)
## 声明文件具体实现
```
//关键字 declare 表示声明一个类型
declare let myName: string; // 声明全局变量
declare const num: number;// 声明全局常量
declare var isSure: boolean;// 声明全局变量
declare function sayHello(name: string): void;// 声明全局方法
declare class Animal {}// 声明全局类
declare enum Color {Red, Green, Blue}// 声明全局枚举
declare namespace SomeNameSpace {}// 声明全局命名空间
declare module "someModule" {} // 声明全局模块
interface Person {} // 声明全局接口
type MyType = string; // 声明全局类型
```
## 声明文件位置
* 与库文件同目录下(同名不同扩展名 .d.ts)
* 全局位置(node_modules/@types),通过@types包安装社区维护的声明文件。
* 自定义位置(tsconfig.json中配置)
  * 配置typeRoots或者types
## 使用声明文件
* 通过`import`导入
* 通过三斜线指令 `/// <reference path="...." />`

## ‌声明方式‌
* 全局声明：直接声明在文件顶层
* 模块声明： 包含在 `declare module` 块中
* 命名空间声明：包含在 `declare namespace` 块中
## 模块声明
* 为无类型声明的js库提供类型支持：当使用没有类型声明的第三方库时，可以通过`declare module`来为其添加类型定义
* 扩展现有模块：基于现有的模块进行扩展，添加新的属性或方法
* 声明自定义模块的类型：为项目中的自定义模块提供类型定义，提高类型安全性

```
declare module "my-module" {
  //类型声明内容
}
```
模块内部可以包含： 
* 变量声明： `export const 变量名：类型;`
* 函数声明： `export function 函数名(参数：类型)：返回类型;`
* 类声明： `export class 类名 {}`
* 接口声明： `export interface 接口名 {}`
* 枚举声明： `export enum 枚举名 {}`
* 命名空间声明： `export namespace 命名空间名 {}`

### 模块声明使用场景
#### 1. 为无类型库添加声明
```
// my-library.d.ts
declare module "my-library" {
  export function doSomething(input: string): number;
  export const version: string;
}

//使用时获得完整类型提示
//import { doSomething, version } from "my-library";
//doSomething("hello");
```
#### 2. 扩展现有模块，如vue
```
// vue.d.ts
declare module "vue" {
  interface ComponentCustomProperties {
    $bus: EventEmitter;
  }
}
//这样可以在所有Vue组件中安全使用 this.$bus
```
#### 3. 声明全局模块
```
// global.d.ts
declare module "global" {
  type BreadCrumbsType = {
    title: string;
    to: string;
  };
}
//所有文件都可以直接使用 BreadCrumbsType 类型

```
## 注意事项(模块声明)
1. 仅包含类型声明，不包含实现逻辑。
```
// 错误示例
declare class World {
  m() { console.log("Hello"); } // ❌ 不能包含实现
}
```
2. 避免命名冲突: 声明**模块的名称应与实际模块名称**完全一致，包括大小写
3. 合并规则: 如果实际代码中存在同名模块，`declare module` 声明会与其合并，补充类型信息
4. 模块解析: 确保`tsconfig.json`中正确配置了 `typeRoots` 或 `types`，以便编译器能找到声明文件
5. 全局与模块声明: `declare module` 用于模块声明，而 `declare global` 用于全局变量声明，**两者不要混淆**

## 使用方法(模块声明)
### 1. 基本使用步骤
1. 创建 .d.ts 声明文件（如 my-module.d.ts）
2. 使用 declare module 声明模块结构
3. 在 tsconfig.json 中包含声明文件
4. 在代码中正常导入使用

## 命名空间
* 减少全局污染：将类型定义限制在命名空间范围内，避免全局类型冲突

### 命名空间在声明文件中的语法结构
1. 基本语法
```
// 基础命名空间声明
declare namespace MyNamespace {
  // 类型定义
  interface MyType {
    prop: string;
  }
  
  // 导出类型成员
  export const version: string;
  export class MyClass {}
}
```
2.  嵌套命名空间
```
declare namespace Outer {
  export namespace Inner {
    export interface NestedType {
      value: number;
    }
  }
}
// 使用方式
Outer.Inner.NestedType;
```
3. 多文件命名空间
* 通过 `/// <reference path="..." />` 引用其他文件中的命名空间
```
// file1.d.ts
declare namespace MyLib {
  export interface Config {
    timeout: number;
  }
}

// file2.d.ts
/// <reference path="file1.d.ts" />
declare namespace MyLib {
  export class Service {
    constructor(config: Config);
  }
}
```
## 基本使用方式
1. 直接访问命名空间成员‌:
   在声明文件中使用 `export` 导出的命名空间成员，可以直接通过 `命名空间名.成员名` 的方式访问
```
// 声明文件 my-namespace.d.ts
declare namespace MyNamespace {
  export const PI: number = 3.14159;
  export function calculateCircumference(diameter: number): number;
}

// 使用文件 app.ts
console.log(MyNamespace.PI); // 输出: 3.14159
const circumference = MyNamespace.calculateCircumference(5);
```
2. 嵌套命名空间访问‌：
   需要使用逐级访问的方式
```
// 声明文件 app.d.ts
declare namespace MyApp {
  export namespace Models {
    export interface User {
      id: string;
      name: string;
    }
  }
}

// 使用文件 app.ts
interface User extends MyApp.Models.User {}
```
