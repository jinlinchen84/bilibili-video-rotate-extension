function applyRotation(rotate) {
  const video = document.querySelector("video");
  if (video) {
    if (rotate) {
      video.style.transform = "rotate(180deg)";
      video.style.transformOrigin = "center center";
    } else {
      video.style.transform = "rotate(0deg)";
    }
  }
}

// 每隔2秒检查一次视频状态，并应用设置
setInterval(() => {
  chrome.storage.sync.get(["rotateVideo"], (res) => {
    applyRotation(res.rotateVideo);
  });
}, 2000);

