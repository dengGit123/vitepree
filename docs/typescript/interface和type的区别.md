### 不同点
1. 定义的范围不一样
 * `interface` 专门用于描述对象的结构（属性和方法）; 
 * `type` 为任意类型创建别名
 * `interface` 支持同名接口自动合并属性
 ```
 interface User { name: string; }
 interface User { age: number; }
// 合并后：{ name: string; age: number }
 ```
 * `type` 禁止重复定义，同名类型会报错
 ```
 type User = { name: string };
 type User = { age: number }; // Error
 ```

### 相同点
1. 都可以扩展
   *  `interface‌` 通过 `extends` 实现继承，支持多继承;
   ```
   interface Animal { name: string; }
   interface Dog extends Animal { breed: string; }
   ```
   * `type` 通过交叉类型 `&` 实现合并，不支持多继承
   ```
   type Animal = { name: string };
   type Dog = Animal & { breed: string };
   ```