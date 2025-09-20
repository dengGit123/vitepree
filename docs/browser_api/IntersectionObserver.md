## IntersectionObserver
* 用于异步监听目标元素与祖先元素或视口的交叉状态变化
## 一. 核心特性
1. ‌异步检测
* 通过浏览器底层优化，避免频繁触发主线程计算，性能显著优于 `scroll` 事件 + `getBoundingClientRect()` 的组合
2. 灵活配置
* 支持自定义检测范围`（root）`、触发阈值`（threshold）`和边界扩展`（rootMargin）`
3. 精准回调
* 提供 isIntersecting 和 intersectionRatio 等属性，精确判断元素可见性状态
## 基础用法
```javascript
// 创建观察者实例，并指定回调函数和配置选项
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('元素进入视口', entry.target);
    }
  });
}, {
  threshold: 0.5, // 50%可见时触发
  rootMargin: '10px' // 扩展检测边界
});

observer.observe(document.getElementById('target'));
observer.unobserve(document.getElementById('target'));// 停止观察
observer.disconnect();// 完全断开观察者实例
```
## 典型应用场景
1. 图片懒加载
* 根据图片是否进入视口，动态加载或显示;当图片进入视口时动态加载 src，减少首屏请求;
```
const lazyImages = document.querySelectorAll('.lazy-img');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);// 停止观察，避免重复加载
    }
  });
});
lazyImages.forEach(img => observer.observe(img));
//observer.disconnect();// 断开观察者实例
```
2. 无限滚动加载
* 监听占位元素（如 #load-more-trigger）进入视口时加载下一页数据
3. 动画触发
* 元素可见时添加 CSS 动画类，实现滚动动画效果
4. 广告展示
* 精确计算广告元素的可见时间和比例
## 注意事项
1. 兼容性
* 部分旧浏览器不支持，需引入 polyfill 或使用 fallback 方法;
2. 性能优化
* 避免在回调中执行复杂操作，尽量减少 DOM 操作和样式计算;
3. 边界处理
* 注意 rootMargin 的正负值对检测范围的影响;
4. 多次触发问题
* 可能因频繁进入视口而重复触发，可通过 debounce/throttle 控制频率或设置单一观察目标;
5. ‌内存泄漏
* 确保在不需要时调用 disconnect 方法断开观察者实例，避免内存泄漏;
## 总结
IntersectionObserver 提供了一种高效、灵活的方式来监听元素与视口的交叉状态变化，适用于多种场景的动态内容加载和管理。通过合理配置和使用，可以显著提升页面交互体验和性能表现。