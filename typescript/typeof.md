## typeof的作用
* 用于获取一个变量或对象的类型
## 检测范围
* 变量
* 对象
```
// 'string','number','boolean','symbol','bigint','undefined','object','function'
```
## 使用场景
* 获取变量的类型，以便进行类型断言或类型检查。
* 在泛型编程中获取参数的类型信息。
```ts
let a: number = 10;
type AType = typeof a; // AType 为 number

interface Person {
  name: string;
  age: number;
}
const person: Person = { name: 'Alice', age: 30 };
type PersonType = typeof person; // PersonType 为 Person 的类型

function getPerson(): Person {
  return person;
}
type GetPersonReturnType = ReturnType<typeof getPerson>; // GetPersonReturnType 为 Person 的类型

class Car {
  brand: string;
  constructor(theBrand: string) {
    this.brand = theBrand;
  }
}
type CarConstructor = typeof Car; // CarConstructor 为构造函数类型

// 泛型中使用
function identity<T>(arg: T): T {
  return arg;
}
type IdentityFunction = (x: any) => x is unknown ? never : x;
type IdentityGeneric = <T extends unknown> (arg: T) => T;
type IdentityInferred = typeof identity; // IdentityInferred 为泛型函数类型
```