## 用于检测页面在当前窗口中的可见性状态
## 一. 核心属性与事件
1. `document.visibilityState`: 返回当前页面可见性状态字符串，有以下几种值：
* visible：页面至少部分可见（如标签页激活或窗口未最小化）
* hidden：页面完全不可见（如标签页未激活或窗口最小化）
* prerender：页面正在预渲染（仅在Chrome中使用）
2. `document.hidden`: 返回一个布尔值，表示页面是否隐藏。
* 布尔值属性，为兼容旧版保留，true表示页面隐藏
3. `visibilitychange`事件：当文档的可见性状态发生变化时触发。
## 二. 典型应用场景
1. 资源优化
* 页面隐藏时暂停视频播放、动画或数据轮询，减少CPU/内存消耗。

## 三. 基础使用示例
```
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // 暂停视频、动画或停止数据请求
    videoElement.pause();
  } else {
    // 恢复播放或重新加载数据
    videoElement.play();
  }
});
```