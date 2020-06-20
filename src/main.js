


setTimeout(() => {
  // 粘性按钮
  stickyElements('.arrow', {
    // stickiness: 500,
    // duration: 450
  });
}, 0);

window.onorientationchange = function () {
  alert('检测到屏幕未锁定方向,请锁定竖屏以保证浏览效果!')
}