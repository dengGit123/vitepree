## requestAnimationFrame
* 用于高效执行动画
* 其核心原理是与浏览器刷新率同步执行回调函数，实现更流畅的动画效果
## 核心原理与优势
1. 帧同步机制
* 以显示器刷新频率（通常为60Hz，即16.7ms/帧）调用回调函数，避免过度绘制或丢帧
2. 自动暂停优化
* 当页面不可见或浏览器标签页不活动时，自动暂停执行回调函数，减少资源消耗
3. ‌高性能调度
* 回调函数在浏览器重绘前执行，优先级高于`setTimeout/setInterval`，避免任务队列阻塞
## 基础用法
```
let animationId;
function animate() {
  // 动画逻辑
  animationId = requestAnimationFrame(animate); // 递归调用
}
animate();

// 停止动画
cancelAnimationFrame(animationId);
```
## 对比传统方法
|特性|requestAnimationFrame|setTimeOut/setInterval|
|--|--|--|
|时间精度|与刷新率同步|受任务队列影响不稳定|
|后台标签页性能|自动暂停|持续执行|
|动画流畅度|高|可能出现卡顿|
## 适用场景
1. 动画效果
2. 动态数据可视化:实时图表更新时避免渲染抖动
## 注意事项
1. ‌递归调用时需保存`animationId`，以便后续取消动画
* 回调函数需手动调用`requestAnimationFrame`以持续动画

2. 使用`cancelAnimationFrame`正确停止动画，防止内存泄漏

