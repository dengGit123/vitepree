#### void: 一个特殊的类型,用于表示函数没有返回值（即不返回任何值）
* 表示没有任何类型
* 只有`null`,和`undefined` 赋值,因为**null**和**undefined**是所有类型的子类型

1. 基本定义
* 函数返回值‌: 当函数没有`return`语句或显式返回`undefined`时，其返回类型为`void`
```
function logMessage(): void {
  console.log("Hello");
  // 无返回值
}
```
* 与 undefined 的区别‌
#### `void`表示“忽略返回值”，而`undefined`是明确的返回值。若函数返回 undefined，需显式声明：
```
function returnUndefined(): undefined {
  return undefined; // 必须显式返回
}
```
2. 使用场景
* ``回调函数‌：``常见于事件处理函数或异步回调，不关心返回值时使用 `void`
```
setTimeout((): void => {
  console.log("Delayed");
}, 1000);
```
* ``方法声明‌：``接口或类中定义无返回值的方法
```
interface Button {
  onClick: () => void;
}
```
* ``忽略返回值‌：``强制忽略函数的返回值（如 `Array.prototype.push` 返回长度，但可能不关心）
```
const nums: number[] = [1, 2];
const result: void = nums.push(3); // 明确忽略返回值
```