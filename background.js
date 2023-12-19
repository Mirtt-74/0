/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'openNetworkFolder') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var networkPath = "file:///h:/user/";  // Ide írd be a kívánt hálózati elérési utat
      chrome.tabs.update(tabs[0].id, {url: networkPath});
    });
  }
});*/

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('request, sender, sendResponse :>> ', request, sender, sendResponse);
  if (request.action === 'openNetworkFolder') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var networkPath = "file:///h:/user/";  // Ide írd be a kívánt hálózati elérési utat
      chrome.tabs.update(tabs[0].id, {url: networkPath});
      return true;
    });
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log('request, sender, sendResponse :>> ', request, sender, sendResponse);
//     if (request.action === 'openNetworkFolder') {
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         //var networkPath = "file:///h:/user/";  // Ide írd be a kívánt hálózati elérési utat
//         //chrome.tabs.update(tabs[0].id, {url: networkPath});
//       });
//     }
//   });
// });

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action == 'openNetworkFolder') {
//     console.log('request, sender, sendResponse :>> ', request, sender, sendResponse);
//   }
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'openNetworkFolder') {
//     console.log('request :>> ', request);
//     return true;
//   }
// });
