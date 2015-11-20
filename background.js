chrome.storage.sync.get(null, function (data) {
    if (typeof data.url === 'undefined' || typeof data.height === 'undefined' || typeof data.width === undefined) {
        // write in a default config
        chrome.storage.sync.set({
            'url': 'https://en.m.wikipedia.org/wiki/Special:Random/#/random',
            'height': 400,
            'width': 300,
        });
    }
});
