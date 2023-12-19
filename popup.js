document.addEventListener('DOMContentLoaded', function() {
  var openFolderButton = document.getElementById('openFolder');
  if (openFolderButton) {
    openFolderButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
        console.log('tabs :>> ', tabs);
        console.log('tabs[0].id :>> ', tabs[0].id);
        //chrome.tabs.sendMessage({action: 'openNetworkFolder'});
        //await chrome.tabs.sendMessage(tabs[0].id, {action: 'openNetworkFolder'});
        //chrome.tabs.sendMessage(tabs[0].id, {action: "openNetworkFolder"}, function(response) {});
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var networkPath = "file:///t:/TERVEZES/";  // Ide írd be a kívánt hálózati elérési utat
          chrome.tabs.update(tabs[0].id, {url: networkPath});
          return true;
        });

      });
    });
  } else {
    console.log("Az 'openFolder' gomb nem található.");
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

// (async () => {
// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('openFolder').addEventListener('click', async function() {
//       await chrome.tabs.sendMessage(1, {action: 'openNetworkFolder'});
//     });
// });
// })();


// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('openFolder').addEventListener('click', async function() {
//     const { tip } = await chrome.tabs.sendMessage(1, {action: 'openNetworkFolder'});
//     });
// });
