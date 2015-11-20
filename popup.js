function initFrame() {
  chrome.storage.sync.get(null, function(data) {
    document.getElementById('viewFrame').setAttribute('src', data.url);
    document.getElementById('viewFrame').setAttribute('height', data.height);
    document.getElementById('viewFrame').setAttribute('width', data.width);
  });
}

document.addEventListener('DOMContentLoaded', initFrame);
