// 点击屏幕播放音频
document.documentElement.addEventListener("click", function () {
    document.getElementById('YSGo').play();
});

// 重定向
window.onload = function () {
    setTimeout(function () {
        window.location.href = 'https://www.zafu.edu.cn/';
    }, 10000);
};