import { listen, listenGroup, installListener, listenNamespaceGroup, listenNamespace } from "web-ext-msg-passing"

installListener()

listen("get google html", () => {
  return fetch("https://www.google.com/").then(res => res.text())
})

listenGroup({
  openTab(_) {
    chrome.tabs.create({}, tabs => {
      chrome.storage.local.set({
        tabid: tabs.id
      })
    })
  },
  ["closeTab"](tabid) {
    chrome.storage.local.get(["tabid"], res => {
      res.tabid && chrome.tabs.remove(res.tabid)
    })
  }
})

listenNamespace("api", "getGithubHtml", async () => {
  return fetch("https://github.com/").then(res => res.text())
})

listenNamespaceGroup("browser", {
  getCurrentTabId() {
    return new Promise((resolve) => {
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        resolve(tabs[0]?.id || "")
      })
    })
  },
  getCurrentWindowId() {
    return chrome.windows.WINDOW_ID_CURRENT
  }
})