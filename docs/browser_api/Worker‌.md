## Worker‌
*  是一种允许在后台线程中运行脚本的 API
*  用于解决主线程因耗时任务导致的页面卡顿问题
## 核心特性
1. 独立线程执行
* 在独**立于主线程**的后台运行，不会阻塞 UI 渲染和用户交互
2. 通信机制
* 通过 `postMessage` 和 `onmessage` 实现主线程与 Worker 间的数据传递
3. 限制
* 受同源策略限制，只能与创建它的页面在同一域下通信
* 无法直接操作 `DOM` 或访问 `window` 对象
## 使用场景
1. ‌密集型计算‌
* 如大数运算、图像处理等耗时任务
2. ‌实时数据处理‌
* 日志分析、流媒体解码等需持续运行的后台任务
3.离线缓存与预加载‌
* Service Worker 可用于资源缓存和离线体验优化
## 基础用法示例
```
// 主线程
const worker = new Worker('worker.js');
worker.postMessage({ data: 1000 }); // 发送数据
worker.onmessage = (e) => {
  console.log('结果:', e.data); // 接收结果
};

// worker.js
self.onmessage = (e) => {
  const result = heavyTask(e.data.data); // 执行计算
  self.postMessage(result); // 返回结果
};
```
## 注意事项
1. ‌兼容性
* 并非所有浏览器都支持，需检查兼容性
2. 资源限制
* Worker 线程的资源有限，需合理分配
3. 错误处理
* `onerror` 事件可用于捕获 Worker 中的错误
