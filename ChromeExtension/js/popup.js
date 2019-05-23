function createTab() {
  var index_url = "https://www.youtube.com/watch?v=WrO9PTpuSSs";
  chrome.tabs.create({
    url: index_url
  });
}
document.getElementById('gitLink').addEventListener("click", createTab);