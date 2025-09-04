document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleBtn");

  // 获取当前状态
  chrome.storage.sync.get(["rotateVideo"], (res) => {
    const rotate = res.rotateVideo || false;
    button.textContent = rotate ? "Disable Rotation" : "Enable Rotation";
  });

  // 点击切换状态
  button.addEventListener("click", () => {
    chrome.storage.sync.get(["rotateVideo"], (res) => {
      const current = res.rotateVideo || false;
      const updated = !current;
      chrome.storage.sync.set({ rotateVideo: updated }, () => {
        button.textContent = updated ? "Disable Rotation" : "Enable Rotation";
      });
    });
  });
});
