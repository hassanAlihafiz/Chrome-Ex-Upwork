var s = document.createElement('script');
s.src = chrome.extension.getURL('main.js');
document.documentElement.appendChild(s);
