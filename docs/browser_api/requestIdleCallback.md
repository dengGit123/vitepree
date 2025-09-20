## requestIdleCallback
* 用于浏览器在**空闲时段**执行低优先级任务的 API
* 回调函数会在浏览器空闲时执行
* 其核心设计目标是避免非关键任务阻塞主线程，从而优化页面性能
## 一. 核心机制
1. 执行时机
* 浏览器空闲时段;在浏览器完成一帧内的关键任务（如布局、绘制、`requestAnimationFrame` 回调）后，若仍有**剩余时间**（通常每帧约16.67ms），则触发回调
2. 优先级控制
* 回调函数执行优先级低于其他关键任务，与高优先级的 `requestAnimationFrame` 不同，`requestIdleCallback` 属于低优先级任务，仅在**空闲时执行**
如用户交互、动画等
3. 超时机制
* 通过 `options.timeout` 参数强制回调在指定时间内执行（即使无空闲时间），但可能引发卡顿
## 基础语法
```javascript
// 示例代码：在浏览器空闲时执行任务列表
const callbackId = requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    executeTask(); // 执行任务
  }
}, { timeout: 2000 }); // 超时2秒强制执行

// 取消回调
cancelIdleCallback(callbackId);
```
## 三. 关键参数与对象
* `deadline` 对象
  * `timeRemaining()` 方法：返回当前帧剩余时间，单位为毫秒
  * `didTimeout` 属性：指示回调是否因超时而被触发
* options 配置
  * `timeout`：指定回调执行的最长时间，单位为毫秒；仅支持 timeout 参数，用于设置强制执行的等待时间
## 四. 适用场景
1. 非关键任务
* 如日志上报、数据分析等不影响用户体验的后台任务
2. 增量更新
* 在浏览器空闲时执行，避免阻塞主线程
3. 资源预加载
* 如图片懒加载、字体预加载等
## 五. 注意事项
1. 避免DOM操作
* 在回调中修改DOM可能导致重排/重绘，破坏性能优化初衷
2. 任务拆分
*  将复杂任务拆分为多个小任务，确保每次执行时间不超过`timeRemaining()`返回的值
## 六. 与 requestAnimationFrame 对比
|特性|requestIdleCallback	|requestAnimationFrame|
|--|--|--|
|执行时机	|浏览器空闲时段	|下一帧开始前（约16.67ms）|
|优先级	|低（非关键任务）	|高（动画、视觉效果等）|
|超时机制	|支持（`timeout`参数）	|不支持|