/* global window */

// const browser = window.chrome

// chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
//   // verify `sender.url`, read `request` object, reply with `sendResponse(...)`...
//   debugger
// })

function sendDataToExtension(key, value) {
  var dataObj = { key: key, value: value }
  var storeEvent = new CustomEvent('myStoreEvent', { detail: dataObj })
  document.dispatchEvent(storeEvent)
}

export const sendMessageToBrowserDevTools = (type, payload) => {
  sendDataToExtension(type, payload)
  // try {
  //   browser.runtime.postMessage('djcmmahgjgmlnifgplancjlmofnbobbm', { type, payload })
  // } catch (e) {
  //   console.error(e)
  //   // debugger
  // }
}
