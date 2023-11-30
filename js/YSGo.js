function playAudio() {
    document.getElementById('YSGo').play();
}

document.documentElement.addEventListener("click",playAudio)
document.documentElement.addEventListener("touchstart ", playAudio);
