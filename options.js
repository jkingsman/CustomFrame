document.getElementById("config").addEventListener("submit", function(e) {
  e.preventDefault();

  chrome.storage.sync.set({
    'url': document.getElementById('url').value,
    'height': document.getElementById('height').value,
    'width': document.getElementById('width').value,
  });

  document.getElementById('status').innerHTML = 'Settings saved.';

  setTimeout(function() {
    // remove the status message in 3 seconds
    document.getElementById('status').innerHTML = '';
  }, 3000);
});

function populateOptions() {
  chrome.storage.sync.get(null, function(data) {
    document.getElementById('url').value = data.url;
    document.getElementById('height').value = data.height;
    document.getElementById('width').value = data.width;
  });
}

document.addEventListener('DOMContentLoaded', populateOptions);
